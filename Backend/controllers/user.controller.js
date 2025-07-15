// controllers/user.controller.js

import { userValidationSchema } from "../validators/user.validator.js";
import * as userService from "../services/user.service.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";
import logger from "../utils/logger.js";
import { nomineeValidationSchema } from "../validators/nominee.validator.js";
import User from "../models/User.model.js";

// Register User Controller
export const registerUser = catchAsync(async (req, res, next) => {
  const { error, value } = userValidationSchema.validate(req.body);

  if (error) {
    logger.warn(`Validation failed during registration: ${error.message}`);
    return next(new AppError(error.message, 400));
  }

  const user = await userService.registerUser(value);
  logger.info(`New user registered: ${user.email}`);

  res.status(201).json({ message: "User registered successfully", user });
});

// Login User Controller
export const loginUser = catchAsync(async (req, res, next) => {
  const { email, passwordHash } = req.body;

  if (!email || !passwordHash) {
    return next(new AppError("Email and password are required", 400));
  }

  const { token, user } = await userService.loginUser(email, passwordHash);

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .status(200)
    .json({ message: "Login successful", user });
});

// Get User Profile Controller
export const getUserProfile = catchAsync(async (req, res, next) => {
  const user = await userService.getUserProfile(req.user._id);
  res.json({ user });
});

// Logout User Controller
export const logoutUser = catchAsync(async (req, res, next) => {
  const token = req.cookies.token;
  const userId = req.user._id;
  if (!token || !userId) {
    return next(new AppError("User not logged in", 400));
  }
  await userService.logoutUser(userId, token);
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
  logger.info(`User logged out: ${userId}`);
});

export const addNominee = catchAsync(async (req, res, next) => {
  const { error, value } = nomineeValidationSchema.validate(req.body);

  if (error) {
    return next(new AppError(`Invalid nominee: ${error.message}`, 400));
  }

  const nominees = await userService.addNominee(req.user, value);
  res.status(201).json({ message: "Nominee added", nominees });
});

// Update nominee
export const updateNominee = catchAsync(async (req, res, next) => {
  const index = parseInt(req.params.index);
  const { error, value } = nomineeValidationSchema.validate(req.body);

  if (error) {
    return next(new AppError(`Invalid nominee update: ${error.message}`, 400));
  }

  const nominees = await userService.updateNominee(req.user, index, value);
  res.json({ message: "Nominee updated", nominees });
});

// Delete nominee
export const deleteNominee = catchAsync(async (req, res, next) => {
  const index = parseInt(req.params.index);
  const nominees = await userService.deleteNominee(req.user, index);
  res.json({ message: "Nominee deleted", nominees });
});

// Get all nominees
export const getAllNominees = catchAsync(async (req, res) => {
  const nominees = await userService.getAllNominees(req.user);
  res.json({ nominees });
});

export const verifyEmail = catchAsync(async (req, res, next) => {
  const { token } = req.params;
  if (!token) return next(new AppError("Verification token is missing", 400));

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return next(new AppError("Invalid or expired token", 400));
  }

  const user = await User.findById(decoded.id);
  if (!user) return next(new AppError("User not found", 404));

  if (user.isVerified) return res.send("Email already verified.");

  user.isVerified = true;
  await user.save();

  res.send("Email verified successfully. You can now login.");
});

export const confirmAlive = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.lastAliveResponse = new Date();
  user.aliveStatus = 'active';
  user.alivePhase = 'initial';
  await user.save();

  res.json({ message: 'User marked as active again.' });
});



