
import {ISingleComment} from '../../components/entities/comments'
export const GET_COMMENTS = 'GET_COMMENTS';

export interface ICommentTypes {
    GET_COMMENTS: {
        commentsList: ISingleComment[];
    }
}