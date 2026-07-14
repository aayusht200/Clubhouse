import express from 'express';
import { posts } from '../controller/posts.js';
const router = express.Router();

router.get('/', posts);

export { router };
