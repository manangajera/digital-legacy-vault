import express from 'express';
import upload from '../middlewares/multer.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import {downloadFile, getAllFiles, uploadFile } from '../controllers/fileController.js';
import { all } from 'axios';

const router = express.Router();

// Only authenticated users can upload
router.post('/upload', authMiddleware, upload.single('file'), uploadFile);
router.get('/download/:id', authMiddleware, downloadFile);
router.get('/allFiles', authMiddleware, getAllFiles);

export default router;
