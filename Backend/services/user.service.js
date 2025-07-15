import bcrypt from 'bcryptjs';
import User from '../models/User.model.js';
import AppError from '../utils/AppError.js';
import { generateToken } from '../utils/generateToken.js';
import { generateEncryptionKey, encryptWithMasterKey } from '../utils/cryptoUtils.js';
import  BlackListToken from '../models/BlackListToken.model.js';
import { sendVerificationEmail } from '../utils/emailService.js';

// Register Service
export const registerUser = async ({ fullName, email, phone, passwordHash }) => {
  const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
  if (existingUser) throw new AppError('Email or phone already in use', 409);

  const encryptionKey = generateEncryptionKey();
  const encryptedKey = encryptWithMasterKey(encryptionKey);

  const user = await User.create({
    fullName,
    email,
    phone,
    passwordHash,
    encryptionKey: encryptedKey,
  });

  // Generate token
  const verifyToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  await sendVerificationEmail(user, verifyToken);

  return {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    isVerified: user.isVerified,
  };
};

// Get User Profile Service
export const getUserProfile = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new AppError('User not found', 404);
  return {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    isVerified: user.isVerified,
  };
};

// Login Service
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new AppError('Invalid email or password', 401);

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) throw new AppError('Invalid email or password', 401);

  const token = generateToken(user._id);

  return {
    token,
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      isVerified: user.isVerified,
    },
  };
};

// Logout Service (can be extended for token blacklist)
export const logoutUser = async (userId, token) => {
  if (!userId || !token) throw new AppError('Invalid logout request', 400);
  const blacklistedToken = await BlackListToken.create({ userId, token });
  if (!blacklistedToken) throw new AppError('Failed to logout', 500);
  return true;
};

// Add Nominee
export const addNominee = async (userId, nomineeData) => {
  const user = await User.findById(userId);
  if (!user) throw new AppError('User not found', 404);

  user.nominees.push(nomineeData);
  await user.save();

  return user.nominees;
};

// Update Nominee by index
export const updateNominee = async (userId, index, updatedData) => {
  const user = await User.findById(userId);
  if (!user || !user.nominees[index]) throw new AppError('Nominee not found', 404);

  user.nominees[index] = { ...user.nominees[index]._doc, ...updatedData };
  await user.save();

  return user.nominees;
};

// Delete Nominee by index
export const deleteNominee = async (userId, index) => {
  const user = await User.findById(userId);
  if (!user || index >= user.nominees.length) throw new AppError('Nominee not found', 404);

  user.nominees.splice(index, 1);
  await user.save();

  return user.nominees;
};

// Get all nominees
export const getAllNominees = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new AppError('User not found', 404);
  return user.nominees;
};
