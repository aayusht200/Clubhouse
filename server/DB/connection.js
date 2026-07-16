import pg from 'pg';

pg.types.setTypeParser(1082, (val) => val); //disables autoconversion of certain
if (process.env.NODE_ENV !== 'production') {
    await import('dotenv/config');
}
const pool = new pg.Pool({
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    database: process.env.database,
});
export { pool };
