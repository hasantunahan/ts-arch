import User from "../../api/model/User";

export enum ActionEnum {
    CHANGE_LOADING = "LOADING",
    LOADED = "LOADED",
    SET_USER = "SET_USER"
}

interface UserState {
    loading: boolean,
    data: User,
}

interface Action {
    type: ActionEnum;
    payload?: User,
}


export const userInitialState: UserState = {
    loading: false,
    data: new User()
};

function userReducer(state: UserState, action: Action) {
    switch (action.type) {
        case ActionEnum.CHANGE_LOADING:
            return {
                ...state,
                loading: true,
            }
        case ActionEnum.LOADED:
            return {
                ...state,
                loading: false,
            }
        case ActionEnum.SET_USER:
            return {
                ...state,
                data : action.payload as User,
            }
        default:
            return state;
    }
}

export default userReducer;