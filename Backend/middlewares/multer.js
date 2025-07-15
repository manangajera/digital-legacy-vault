import multer from 'multer';
const storage = multer.memoryStorage(); // store in memory for direct upload
export default multer({ storage });
