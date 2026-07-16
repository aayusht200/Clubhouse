const queries = {
    getAllPosts: `
        SELECT
            p.id,
            p.title,
            p.text
        FROM posts p;
    `,

    getAllPostsWithAuthor: `
        SELECT
            p.id,
            p.title,
            p.text,
            p.created_at,
            u.first_name,
            u.last_name
        FROM posts p
        JOIN users u
        ON p.created_by = u.id;
    `,
    getPostById: `
        SELECT
            p.id,
            p.title,
            p.text
        FROM posts p
        WHERE p.id=$1;
    `,

    getPostByIdWithAuthor: `
        SELECT
            p.id,
            p.title,
            p.text,
            p.created_at,
            u.first_name,
            u.last_name
        FROM posts p
        JOIN users u
        ON p.created_by = u.id
       WHERE p.id=$1;
    `,
    deletePostById: `DELETE FROM posts WHERE id=$1`,
    createPost: `INSERT INTO posts (id, title,text,created_by)
VALUES ($1,$2,$3,$4) RETURNING *;`,
};

export { queries };
