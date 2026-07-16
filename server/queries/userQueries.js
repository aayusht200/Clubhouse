const queries = {
    getUserByEmail: 'SELECT * FROM users WHERE email=$1;',
    insertUser: 'INSERT INTO  users (id,first_name,last_name,email,password) VALUES ($1,$2,$3,$4,$5);',
    getUserById: `SELECT id, first_name, last_name, email, is_member, is_admin
FROM users
WHERE id = $1;`,
    setMember: `UPDATE users
SET is_member = TRUE
WHERE id=$1;`,
};

export { queries };
