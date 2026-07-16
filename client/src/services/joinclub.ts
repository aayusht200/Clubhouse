import { api } from './api';

type JoinClubResponse = {
    message: boolean;
};

const joinClub = async (code: string): Promise<boolean> => {
    const response = await api.post<JoinClubResponse>('/users/join-club', {
        code,
    });

    return response.data.message;
};
export default joinClub;
