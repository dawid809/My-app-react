/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ISinglePost } from "../entities/posts";
import * as actionTypes from "../actions/actionTypes/postTypes";

export interface IPostsReducer {
  postsList: ISinglePost[];
  currentPost: ISinglePost;
}

const defaultState = (): IPostsReducer => ({
  postsList: [],
  currentPost: undefined,
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_POSTS: {
      const payload: actionTypes.IPostTypes["GET_POSTS"] = action;
      return {
        ...state,
        postsList: payload.postsList,
      };
    }
    default: {
      return state;
    }
  }
};
