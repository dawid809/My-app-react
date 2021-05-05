import { ISinglePhoto } from '../components/entities/photos';
import * as actionTypes from '../actions/actionTypes/photoTypes'

export interface IPhotosReducer {
    photosList: ISinglePhoto[];
    currentPhoto: ISinglePhoto
}

const defaultState = (): IPhotosReducer => ({
   photosList: [],
   currentPhoto: undefined
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOS: {
            const data: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                photosList: data.photosList
            }
        }
        default: {
            return state
        }
    }
}