import { requestGet } from '~/utils';

const searchSevices = async (q: string, type: string = 'less') => {
    try {
        const res = await requestGet('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default searchSevices;
