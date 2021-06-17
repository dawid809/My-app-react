import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes/photoTypes";
import { ISinglePhoto } from "../entities/photos";

export const getPhotos = (): Promise<ISinglePhoto[]> =>
  ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((photosList: ISinglePhoto[]) => {
        dispatch({
          type: actionTypes.GET_PHOTOS,
          photosList,
        });
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;
