import { createContext } from 'react';

export interface UserProps {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    is_member: boolean;
    is_admin: boolean;
}

export const InitialUser: UserProps = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    is_member: false,
    is_admin: false,
};

export interface LoginData {
    email: string;
    password: string;
}

export interface SignupData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

interface UserContextProps {
    user: UserProps | null;
    login: (data: LoginData) => Promise<void>;
    logout: () => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    verifyCode: (data: CodeProps) => {};
    isLoggedIn: boolean;
}

export interface CodeProps {
    code: string;
}

export const UserContext = createContext<UserContextProps>({
    user: InitialUser,
    login: async () => {},
    logout: async () => {},
    signup: async () => {},
    verifyCode: async () => {},
    isLoggedIn: false,
});

export default UserContext;
