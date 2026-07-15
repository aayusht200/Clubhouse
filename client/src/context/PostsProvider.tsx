import getAllPosts from '../services/getAllPosts';
import React, { useContext, useEffect, useState } from 'react';
import { PostContext, type Post } from './PostsContext.tsx';
import UserContext from './UserContext.tsx';
interface PostProviderProps {
    children: React.ReactNode;
}

const PostProvider = ({ children }: PostProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const { user } = useContext(UserContext);
    useEffect(() => {
        getAllPosts().then(setPosts).catch(console.error);
    }, [user]);

    return <PostContext.Provider value={{ posts, setPosts }}>{children}</PostContext.Provider>;
};

export default PostProvider;
