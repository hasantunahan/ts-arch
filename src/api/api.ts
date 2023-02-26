import { BASE_URL } from "./APIPath";
import axios from 'axios'

async function handleAxiosError(err: any) {
    return err?.response?.data;
}

const create = () => {
    const axios_client = axios.create({
        baseURL: BASE_URL,
        timeout: 15000,
    });

    axios_client.interceptors.response.use(
        async (response) => {
            return response.data;
        },
        async (err) => {
            const errorResponse = await handleAxiosError(err);
            return errorResponse;
        }
    );
    return axios_client;
};

const api = create();

export default api;
