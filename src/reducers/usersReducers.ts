import { ISingleUser } from '../components/entities/users';
import * as actionTypes from '../actions/actionTypes/userTypes'

export interface IUsersReducer {
    usersList: ISingleUser[];
}

const defaultState = (): IUsersReducer => ({
    usersList: []
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const paylod: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: paylod.usersList
            }
        }
        default: {
            return state
        }
    }
}