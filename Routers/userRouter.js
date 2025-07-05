import express from 'express';
import { protect } from '../Middlewares/authMiddleware.js';
import { getProfile, updateProfile } from '../Controllers/UserController.js';


const router = express.Router();

router.get('/profile', protect,getProfile)
router.put('/profiles', protect, updateProfile)


export default router;