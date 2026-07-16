import UserContext, { InitialUser, type UserProps, type LoginData, type SignupData } from './UserContext.tsx';
import { useState, useEffect, useContext } from 'react';
import userLogin from '../services/login.ts';
import userLogout from '../services/userLogout.ts';
import getCurrentUser from '../services/getCurrentUser.ts';
import { PostContext } from './PostsContext.tsx';
import signupUser from '../services/signupUser.ts';
export interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<UserProps | null>(InitialUser);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const { refreshPosts } = useContext(PostContext);
    useEffect(() => {
        getCurrentUser()
            .then((user) => {
                setUser(user);
                setLoggedIn(true);
                refreshPosts();
            })
            .catch(() => setUser(InitialUser));
    }, []);
    async function login({ email, password }: LoginData) {
        try {
            await userLogin({ email: email, password: password })
                .then((data) => {
                    setUser(data.data.user);
                    setLoggedIn(true);
                    refreshPosts();
                    return;
                })
                .catch((error) => {
                    throw error;
                });
        } catch (error) {
            throw error;
        }
    }
    async function signup({ email, password, first_name, last_name }: SignupData) {
        await signupUser({ email: email, password: password, first_name: first_name, last_name: last_name })
            .then(() => {
                return;
            })
            .catch((error) => {
                throw error;
            });
    }
    async function logout() {
        await userLogout();
        setLoggedIn(false);
        setUser(InitialUser);
        await refreshPosts();
        return;
    }
    return <UserContext.Provider value={{ user, login, logout, signup, isLoggedIn }}>{children}</UserContext.Provider>;
};

export default UserProvider;
