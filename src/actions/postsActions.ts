import { Dispatch } from "redux";
import * as actionTypes from "../actions/actionTypes/postTypes";
import { ISinglePost } from "../entities/posts";

export const getPosts = (): Promise<ISinglePost[]> =>
  ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postsList: ISinglePost[]) => {
        dispatch({
          type: actionTypes.GET_POSTS,
          postsList,
        });
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;
