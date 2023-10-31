import express from 'express';
import {
  signupUser,
  signInUser,
  logoutUser,
  followUser,
  updateUser,
  getUserProfile,
} from '../controllers/userController.js';
import protectRoute from '../middlewares/protectRoute .js';

const router = express.Router();

router.get('/profile/:query', getUserProfile);
router.post('/sign-up', signupUser);
router.post('/sign-in', signInUser);
router.post('/logout', logoutUser);
router.post('/follow/:id', protectRoute, followUser);
router.post('/update/:id', protectRoute, updateUser);

export default router;
