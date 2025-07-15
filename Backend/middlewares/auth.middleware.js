import BlackListToken from '../models/BlackListToken.model.js';
import jwt from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

const authMiddleware = catchAsync(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return next(new AppError('Unauthorized', 401));

  const isBlacklisted = await BlackListToken.findOne({ token });
  if (isBlacklisted) return next(new AppError('Session expired. Please login again.', 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.id;
  if (!userId) return next(new AppError('User not found', 401));

  req.user = { _id: userId }; // Attach userId in standard format
  next();
});

export default authMiddleware;
