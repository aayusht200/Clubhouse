import express from 'express';
import { getAllPosts, getPostsById, deletePostById, createPost } from '../controller/postsController.js';
import { requireAuth, requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostsById);
router.delete('/:id', requireAuth, requireAdmin, deletePostById);
router.post('/', requireAuth, createPost);

export { router };
