import express from 'express';
import { login } from '../controller/login.js';
import { signup } from '../controller/signup.js';
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

export { router };
