import { api } from './api';

async function userLogout() {
    api.post('/users/logout');
    return;
}
export default userLogout;
