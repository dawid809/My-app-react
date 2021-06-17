/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ISinglePhoto } from "../entities/photos";
import * as actionTypes from "../actions/actionTypes/photoTypes";

export interface IPhotosReducer {
  photosList: ISinglePhoto[];
  currentPhoto: ISinglePhoto;
}

const defaultState = (): IPhotosReducer => ({
  photosList: [],
  currentPhoto: undefined,
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_PHOTOS: {
      const payload: actionTypes.IPhotoTypes["GET_PHOTOS"] = action;
      return {
        ...state,
        photosList: payload.photosList,
      };
    }
    default: {
      return state;
    }
  }
};
