import mongoose from 'mongoose';
import logger from '../utils/logger.js'; // adjust path if needed

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017', {
            dbName: 'AfterMe',
        });
        logger.info('MongoDB connected successfully');
    } catch (error) {
        logger.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDb;
