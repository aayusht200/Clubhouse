import getAllPosts from '../services/getAllPosts';
import React, { useEffect, useState } from 'react';
import { PostContext, type Post } from './PostsContext.tsx';
import postMessage from '../services/postMessage.ts';
interface PostProviderProps {
    children: React.ReactNode;
}

export interface newPostProps {
    title: string;
    text: string;
}
const PostProvider = ({ children }: PostProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const refreshPosts = async () => {
        const data = await getAllPosts();
        setPosts(data);
    };

    const createPost = async ({ title, text }: newPostProps) => {
        try {
            await postMessage({ title: title, text: text });
            await refreshPosts();
            return;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    useEffect(() => {
        refreshPosts();
    }, []);

    return <PostContext.Provider value={{ posts, refreshPosts, createPost }}>{children}</PostContext.Provider>;
};

export default PostProvider;
