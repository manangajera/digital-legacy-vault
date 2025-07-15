import mongoose from 'mongoose';

const UserFileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fileType: { type: String, enum: ['image', 'video', 'file'], required: true },
  originalName: String,
  cloudinaryUrl: { type: String, required: true },
  publicId: { type: String, required: true },
  mimeType: String,
}, { timestamps: true });

const UserFile = mongoose.model('UserFile', UserFileSchema);
export default UserFile;
