import { api } from './api';

const getCurrentUser = async () => {
    const user = await api.get('/users/me');
    return user.data.user;
};
export default getCurrentUser;
