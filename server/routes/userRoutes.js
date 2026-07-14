import express from 'express';
import passport from 'passport';
import { signup } from '../controller/userController.js';

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);

        if (!user) {
            return res.status(401).json(info);
        }

        req.login(user, (err) => {
            if (err) return next(err);

            return res.json({
                message: 'Logged in',
            });
        });
    })(req, res, next);
});

router.post('/signup', signup);

export { router };
