import { useCallback, useEffect, useState, useReducer } from 'react';
import { API_PATH } from '../../api/APIPath';
import ResponseModel from '../../api/res/ResponseModel';
import User from '../../api/model/User';
import api from '../../api/API';
import userReducer, { ActionEnum, userInitialState } from './userReducer';



const useUser = (id: string) => {
    const [state, dispatch] = useReducer(userReducer, userInitialState)

    useEffect(() => {
        getUserById(id)
    }, [])

    const getUserById = useCallback(async (id: string) => {
        dispatch({ type: ActionEnum.CHANGE_LOADING})
        const res: ResponseModel<User> = await api.get(`${API_PATH.user}/${id}`)
        dispatch({ type: ActionEnum.LOADED })
        const u = res.data == undefined ? new User() : res.data
        dispatch({ type: ActionEnum.SET_USER, payload: u })
        console.log('====================================');
        console.log(`ResponseModel<User>  ${JSON.stringify(res.data)}`);
        console.log('====================================');
    }, [state.data]);

    return {
        "loading": state.loading,
        "user": state.data,
    }

}

export default useUser;