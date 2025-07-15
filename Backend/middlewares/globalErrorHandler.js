import logger from '../utils/logger.js';

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  logger.error(`${err.message} | ${err.stack}`);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
};

export default globalErrorHandler;
