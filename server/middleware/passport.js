import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { pool } from '../DB/connection.js';
import { queries } from '../queries/userQueries.js';

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
        },
        async (email, password, done) => {
            try {
                const result = await pool.query(queries.getUserByEmail, [email]);

                if (result.rowCount === 0) {
                    return done(null, false, {
                        message: 'No user found',
                    });
                }

                const user = result.rows[0];

                const isValidPassword = await bcrypt.compare(password, user.password);

                if (!isValidPassword) {
                    return done(null, false, {
                        message: 'Invalid credentials',
                    });
                }
                const { password: _, ...safeUser } = user;

                return done(null, safeUser);
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const result = await pool.query(queries.getUserById, [id]);
        if (result.rowCount === 0) {
            return done(null, false);
        }
        return done(null, result.rows[0]);
    } catch (error) {
        return done(error);
    }
});

export default passport;
