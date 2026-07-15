import React, { createContext } from 'react';

export interface Post {
    id: string;
    title: string;
    text: string;
    created_at: string | null;
    first_name: string | null;
    last_name: string | null;
}

export interface PostContextProps {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const initalPost: Post = {
    id: '',
    title: '',
    text: '',
    created_at: '',
    first_name: '',
    last_name: '',
};

export const PostContext = createContext<PostContextProps>({ posts: [], setPosts: () => {} });
