import rateLimit from 'express-rate-limit';

// Limit login and register to 5 requests per 15 minutes per IP
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests
  message: {
    status: 429,
    message: 'Too many attempts. Please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});


export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per IP in 15 min
  message: {
    status: 429,
    message: 'Too many requests. Please try again after 15 minutes.',
  },
  standardHeaders: true, // include rate limit info in headers
  legacyHeaders: false,
});
