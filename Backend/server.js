import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/connectDb.js';
import logger from './utils/logger.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';
import fileRoutes from './routes/file.routes.js';
import { globalLimiter } from './middlewares/rateLimiter.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(globalLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (req, res) => {
    logger.info('GET / request received');
    res.send('Express server is running!');
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/file', fileRoutes);
// Global error handler
app.use(globalErrorHandler);

(async () => {
    try {
        await connectDb();
        logger.info('Database connected successfully');

        app.listen(PORT, () => {
            logger.info(`Server started on port ${PORT}`);
        });
    } catch (error) {
        logger.error(`Database connection failed: ${error.message}`);
        process.exit(1);
    }
})();
