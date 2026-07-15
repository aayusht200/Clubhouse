import express from 'express';
import passport from 'passport';
import { signup, joinClubhouse } from '../controller/userController.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);

        if (!user) {
            return res.status(401).json(info);
        }

        req.login(user, (err) => {
            if (err) return next(err);
            return res.status(200).json({
                message: 'Logged in',
                user: req.user,
            });
        });
    })(req, res, next);
});

router.post('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);

        req.session.destroy((err) => {
            if (err) return next(err);

            res.clearCookie('connect.sid');

            return res.status(200).json({
                message: 'Logged out',
            });
        });
    });
});
router.get('/me', requireAuth, (req, res) => {
    return res.status(200).json({
        user: req.user,
    });
});
router.post('/signup', signup);

router.post('/join-club', requireAuth, joinClubhouse);
export { router };
