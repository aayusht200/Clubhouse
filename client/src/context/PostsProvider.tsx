import getAllPosts from '../services/getAllPosts';
import React, { useEffect, useState } from 'react';
import { PostContext, type Post } from './postsContext';

interface PostProviderProps {
    children: React.ReactNode;
}

const PostProvider = ({ children }: PostProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        getAllPosts().then(setPosts).catch(console.error);
    }, []);

    return <PostContext.Provider value={{ posts, setPosts }}>{children}</PostContext.Provider>;
};

export default PostProvider;
