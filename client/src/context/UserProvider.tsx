import UserContext, { InitialUser, type UserProps, type LoginData, type SignupData } from './UserContext.tsx';
import { useState } from 'react';

export interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<UserProps | null>(InitialUser);
    function login({ email, password }: LoginData) {}
    function signup({ email, password, first_name, last_name }: SignupData) {}
    function logout() {}
    return <UserContext.Provider value={{ user, login, logout, signup }}>{children}</UserContext.Provider>;
};

export default UserProvider;
