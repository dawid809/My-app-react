import { ISingleComment } from '../components/entitiesData/comments';
import * as actionTypes from '../actions/actionTypes/commentTypes'

export interface ICommentsReducer {
    commentsList: ISingleComment[];
    currentComment: ISingleComment
}

const defaultState = (): ICommentsReducer => ({
    commentsList: [],
    currentComment: undefined
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
            const data: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentsList: data.commentsList
            }
        }
        default: {
            return state
        }
    }
}