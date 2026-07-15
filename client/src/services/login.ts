import { api } from './api';
import type { LoginData } from '../context/UserContext';
const userLogin = async ({ email, password }: LoginData) => {
    const isLoggedIn = api.post('/users/login', { email: email, password: password });
    return isLoggedIn;
};

export default userLogin;
