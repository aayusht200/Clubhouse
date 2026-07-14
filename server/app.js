import connectPgSimple from 'connect-pg-simple';
import { router as postsRoutes } from './routes/postsRoutes.js';
import { router as userRoutes } from './routes/userRoutes.js';
import cors from 'cors';
import session from 'express-session';
import { pool } from './DB/connection.js';
import express from 'express';

const app = express();

app.use(cors({ origin: process.env.ORIGIN, credentials: true })); //cors setup
const pgStore = new connectPgSimple(session);

app.use(
    session({
        store: new pgStore({ pool }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 24 * 60 * 60 * 1000 },
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/posts', postsRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

app.use((req, res) => {
    res.status(404).send({ message: 'Invalid route' });
});

export { app };
