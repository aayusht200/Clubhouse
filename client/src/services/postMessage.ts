import { api } from './api';

import type { newPostProps } from '../context/PostsProvider';

const postMessage = async ({ title, text }: newPostProps) => {
    const response = await api.post('/posts', { title: title, text: text });
    return response;
};

export default postMessage;
