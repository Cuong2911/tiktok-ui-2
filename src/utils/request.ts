import axios, { AxiosRequestConfig } from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

const get = async (url: string, config?: AxiosRequestConfig<any> | undefined) => {
    const response = await request.get(url, config);
    return response.data;
};

export { get };
export default request;
