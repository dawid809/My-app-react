/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ISingleAlbum } from "../entities/albums";
import * as actionTypes from "../actions/actionTypes/albumTypes";

export interface IAlbumsReducer {
  albumsList: ISingleAlbum[];
  currentAlbum: ISingleAlbum;
}

const defaultState = (): IAlbumsReducer => ({
  albumsList: [],
  currentAlbum: undefined,
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALBUMS: {
      const payload: actionTypes.IAlbumTypes["GET_ALBUMS"] = action;
      return {
        ...state,
        albumsList: payload.albumsList,
      };
    }
    default: {
      return state;
    }
  }
};
