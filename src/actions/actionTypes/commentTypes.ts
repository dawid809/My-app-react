
import {ISingleComment} from '../../components/entitiesData/comments'
export const GET_COMMENTS = 'GET_COMMENTS';

export interface ICommentTypes {
    GET_COMMENTS: {
        commentsList: ISingleComment[];
    }
}