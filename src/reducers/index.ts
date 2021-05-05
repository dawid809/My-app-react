import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotosReducer } from './photosReducer';
import posts, { IPostsReducer } from './postsReducer';
import comments, { ICommentsReducer } from './commentsReducers';
import albums, { IAlbumsReducer } from './albumsReducers';

export default combineReducers({
    users,
    photos,
    posts,
    comments,
    albums
})


export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
    posts: IPostsReducer;
    comments: ICommentsReducer;
    albums: IAlbumsReducer;
}