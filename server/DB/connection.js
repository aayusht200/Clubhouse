import pg from 'pg';

pg.types.setTypeParser(1082, (val) => val); //disables autoconversion of certain
process.loadEnvFile('./.env');
const pool = new pg.Pool({
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    database: process.env.database,
});
export { pool };
