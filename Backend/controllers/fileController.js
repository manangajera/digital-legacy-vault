import { downloadAndDecryptFile ,allFiles } from '../services/fileService.js';
import { uploadToCloudinary } from '../services/fileService.js';
import catchAsync from '../utils/catchAsync.js';

export const uploadFile = catchAsync(async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  const result = await uploadToCloudinary(
    req.file.buffer,
    req.file.originalname,
    req.file.mimetype,
    req.user._id // <-- from middleware
  );

  res.status(201).json({
    message: 'File uploaded successfully',
    file: result,
  });
});


export const downloadFile = catchAsync(async (req, res) => {
  const fileId = req.params.id;
  const userId = req.user._id;

  const { fileName, mimeType, buffer } = await downloadAndDecryptFile(fileId, userId);

  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  res.setHeader('Content-Type', mimeType);
  res.send(buffer); // Sends the decrypted binary data
});

export const getAllFiles = catchAsync(async (req, res) => {
  const userId = req.user._id;

  // Fetch all files for the user
  const files = await allFiles(userId);

  res.status(200).json({
    message: 'All files retrieved successfully',
    files,
  });
});