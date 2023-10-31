import express from 'express';
import {
  signupUser,
  signInUser,
  logoutUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/sign-up', signupUser);
router.post('/sign-in', signInUser);
router.post('/logout', logoutUser);

export default router;
