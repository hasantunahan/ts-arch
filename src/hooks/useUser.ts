import { useState } from 'react';
import { API_PATH } from '../api/APIPath';
import ResponseModel from '../api/res/ResponseModel';
import User from '../api/model/User';
import api from '../api/API';

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