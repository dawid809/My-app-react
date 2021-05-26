import { ISinglePost } from "../components/entitiesData/posts";
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
      const data: actionTypes.IPostTypes["GET_POSTS"] = action;
      return {
        ...state,
        postsList: data.postsList,
      };
    }
    default: {
      return state;
    }
  }
};
