import { api } from './api';
import type { SignupData } from '../context/UserContext';
const signupUser = async ({ email, password, first_name, last_name }: SignupData) => {
    await api
        .post('/users/signup', { email: email, password: password, first_name: first_name, last_name: last_name })
        .then(() => {
            return;
        })
        .catch((error) => {
            throw error;
        });
};

export default signupUser;
