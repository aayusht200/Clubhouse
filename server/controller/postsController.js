import { pool } from '../DB/connection.js';
import { queries as postQueries } from '../queries/postQueries.js';
const getAllPosts = async (req, res) => {
    try {
        if (req.user?.is_member || req.user?.is_admin) {
            const posts = await pool.query(postQueries.getAllPostsWithAuthor);
            return res.status(200).send(posts.rows);
        }
        const posts = await pool.query(postQueries.getAllPosts);
        return res.status(200).send(posts.rows);
    } catch (error) {
        return res.status(500).json({
            message: error.message || 'Internal Server Error',
        });
    }
};
const getPostsById = async (req, res) => {
    const { id } = req.params;
    try {
        if (req.user?.is_member || req.user?.is_admin) {
            const posts = await pool.query(postQueries.getPostByIdWithAuthor, [id]);
            return res.status(200).send(posts.rows);
        }
        const posts = await pool.query(postQueries.getPostById, [id]);
        return res.status(200).send(posts.rows);
    } catch (error) {
        return res.status(500).json({
            message: error.message || 'Internal Server Error',
        });
    }
};

const deletePostById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRows = await pool.query(postQueries.deletePostById, [id]);
        if (deletedRows.rowCount > 0) {
            return res.status(200).send({ message: 'Deletion successfull' });
        } else return res.status(404).send({ message: 'Invalid id, no rows deleted' });
    } catch (error) {
        return res.status(500).json({
            message: error.message || 'Internal Server Error',
        });
    }
};

const createPost = async (req, res) => {
    const { title, text } = req.body;
    if (!title) {
        return res.status(400).json({
            message: 'Title is required',
        });
    }

    if (!text) {
        return res.status(400).json({
            message: 'Text is required',
        });
    }
    try {
        const insert = await pool.query(postQueries.createPost, [crypto.randomUUID(), title, text, req.user.id]);
        if (insert.rowCount > 0) {
            return res.status(201).json(insert.rows[0]);
        } else
            return res.status(500).json({
                message: 'Failed to create post',
            });
    } catch (error) {
        return res.status(500).json({
            message: error.message || 'Internal Server Error',
        });
    }
};

export { getAllPosts, getPostsById, deletePostById, createPost };
