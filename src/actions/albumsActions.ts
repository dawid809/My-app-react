import { Dispatch } from "redux";
import * as actionTypes from "../actions/actionTypes/albumTypes";
import { ISingleAlbum } from "../entities/albums";

export const getAlbums = (): Promise<ISingleAlbum[]> =>
  ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albumsList: ISingleAlbum[]) => {
        dispatch({
          type: actionTypes.GET_ALBUMS,
          albumsList,
        });
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;
