import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import PostProvider from './context/PostsProvider.tsx';
import UserProvider from './context/UserProvider.tsx';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <UserProvider>
            <PostProvider>
                <App />
            </PostProvider>
        </UserProvider>
    </StrictMode>
);
