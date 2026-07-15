import { pool } from '../DB/connection.js';
import { queries } from '../quries/userQueries.js';
import bcrypt from 'bcrypt';

const signup = async (req, res) => {
    try {
        const { email, first_name, last_name, password } = req.body;

        const existingUser = await pool.query(queries.getUserByEmail, [email]);

        if (existingUser.rowCount) {
            return res.status(409).json({
                message: 'User already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(queries.insertUser, [crypto.randomUUID(), first_name, last_name, email, hashedPassword]);

        return res.status(201).json({
            message: 'User created',
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || 'Internal Server Error',
        });
    }
};



export { signup };
