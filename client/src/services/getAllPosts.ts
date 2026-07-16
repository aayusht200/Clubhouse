import { api } from './api';
import type { Post } from '../context/PostsContext.tsx';
const getAllPosts = async (): Promise<Post[]> => {
    const response = await api.get('/posts');
    return response.data;
};

export default getAllPosts;
