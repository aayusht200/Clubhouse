import React, { createContext } from 'react';
import type { newPostProps } from './PostsProvider';
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
    refreshPosts: () => Promise<void>;
    createPost: ({ title, text }: newPostProps) => Promise<void>;
}

export const initalPost: Post = {
    id: '',
    title: '',
    text: '',
    created_at: '',
    first_name: '',
    last_name: '',
};

export const PostContext = createContext<PostContextProps>({
    posts: [],
    refreshPosts: async () => {},
    createPost: async () => {},
});
