import express from 'express';
import * as userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { authLimiter } from '../middlewares/rateLimiter.js'; 
import { downloadAndDecryptFilesForNominee } from '../controllers/nomineeDownload.controller.js'; 
const router = express.Router();

// Auth routes with rate limiter
router.post('/register', authLimiter, userController.registerUser);
router.post('/login', authLimiter, userController.loginUser);
router.get('/profile', authMiddleware, userController.getUserProfile);
router.post('/logout', authMiddleware, userController.logoutUser);

// Nominee management
router.post('/nominees', authMiddleware, userController.addNominee);
router.put('/nominees/:index', authMiddleware, userController.updateNominee);
router.delete('/nominees/:index', authMiddleware, userController.deleteNominee);
router.get('/nominees', authMiddleware, userController.getAllNominees);
router.get('/verify/:token', userController.verifyEmail);

// alive confirm endpoint
router.post('/verify/alive/:id', userController.confirmAlive);

router.get('/download/:userId', downloadAndDecryptFilesForNominee);
export default router;
