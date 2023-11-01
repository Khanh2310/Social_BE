import express from 'express';
import protectRoute from '../middlewares/protectRoute .js';
import {
  createPosts,
  getPosts,
  deletePost,
} from '../controllers/postsController.js';

const router = express.Router();

router.post('/create', protectRoute, createPosts);
router.get('/:id', getPosts);
router.delete('/:id', protectRoute, deletePost);
export default router;
