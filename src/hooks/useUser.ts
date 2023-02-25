import { useState } from 'react';
import api from '../api/api';
import { API_PATH } from '../api/api_path';
import ResponseModel from '../api/res/response_model';
import User from '../api/model/user';

const useUser = () => {
    const [loading, setLoading] = useState<boolean>(false)
    function changeLoading(value: boolean) {
        setLoading(value)
    }

    async function getUserById(id: string) {
        changeLoading(true);
        const res: ResponseModel<User> = await api.get(`${API_PATH.user}/${id}`)
        changeLoading(false);
        console.log('====================================');
        console.log(`ResponseModel<User>  ${JSON.stringify(res.data)}`);
        console.log('====================================');
        return res.data;
    }

    return {
        loading,
        getUserById,
    }

}

export default useUser;