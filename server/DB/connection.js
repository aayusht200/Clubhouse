import pg from 'pg';

if (process.env.NODE_ENV !== 'production') {
    await import('dotenv/config');
}

pg.types.setTypeParser(1082, (val) => val);

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export { pool };
