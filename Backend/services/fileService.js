import cloudinary from '../utils/cloudinary.js';
import UserFile from '../models/UserFile.model.js';
import User from '../models/User.model.js';
import { decryptBuffer, encryptBuffer } from '../utils/encryption.js';
import axios from 'axios';

export const uploadToCloudinary = async (fileBuffer, originalName, mimetype, userId) => {
  // Step 1: Get user’s encryption key from DB
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  // Step 2: Encrypt the file buffer
  const encryptedBuffer = encryptBuffer(fileBuffer, user.encryptionKey);

  // Step 3: Convert encrypted buffer to base64 string
  const base64Data = `data:${mimetype};base64,${encryptedBuffer.toString('base64')}`;

  // Step 4: Upload to Cloudinary
  const uploadResult = await cloudinary.uploader.upload(base64Data, {
    folder: `securevault/${userId}`,
    resource_type: 'auto',
  });

  // Step 5: Determine file type
  const fileType = mimetype.startsWith('image') ? 'image' :
                   mimetype.startsWith('video') ? 'video' : 'file';

  // Step 6: Save metadata to MongoDB
  const saved = await UserFile.create({
    userId,
    fileType,
    originalName,
    mimeType: mimetype,
    cloudinaryUrl: uploadResult.secure_url,
    publicId: uploadResult.public_id,
  });

  return saved;
};


export const downloadAndDecryptFile = async (fileId, userId) => {
  const fileDoc = await UserFile.findById(fileId);
  if (!fileDoc) throw new Error('File not found');

  if (fileDoc.userId.toString() !== userId.toString()) {
    throw new Error('Unauthorized access to file');
  }

  // Fetch encrypted file from Cloudinary
  const cloudinaryResponse = await axios.get(fileDoc.cloudinaryUrl, {
    responseType: 'arraybuffer',
  });

  const encryptedBuffer = Buffer.from(cloudinaryResponse.data);

  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  // Decrypt file
  const decryptedBuffer = decryptBuffer(encryptedBuffer, user.encryptionKey);

  return {
    fileName: fileDoc.originalName,
    mimeType: fileDoc.mimeType,
    buffer: decryptedBuffer,
  };
};

export const allFiles = async (userId) => {
  const files = await UserFile.find({ userId }).select('originalName cloudinaryUrl fileType createdAt');
  if (!files) throw new Error('No files found for this user');

  return files;
};