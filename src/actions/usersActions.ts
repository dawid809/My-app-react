import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISingleUser } from '../components/entities/users';


export const getUsers = (): Promise<any> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((usersList: ISingleUser[]) => {
        dispatch({
            type: actionTypes.GET_USERS,
            usersList
        })
    })
}) as any;