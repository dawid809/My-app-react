import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/commentTypes';
import { ISingleComment } from '../components/entitiesData/comments';


export const getComments = (): Promise<ISingleComment[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then((commentsList: ISingleComment[]) => {
        dispatch({
            type: actionTypes.GET_COMMENTS,
            commentsList
        })
    })
}) as any;