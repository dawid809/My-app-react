import { ISingleAlbum } from '../components/entitiesData/albums';
import * as actionTypes from '../actions/actionTypes/albumTypes'

export interface IAlbumsReducer {
    albumsList: ISingleAlbum[];
    currentAlbum: ISingleAlbum
}

const defaultState = (): IAlbumsReducer => ({
    albumsList: [],
    currentAlbum: undefined
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_ALBUMS: {
            const data: actionTypes.IAlbumTypes['GET_ALBUMS'] = action;
            return {
                ...state,
                albumsList: data.albumsList
            }
        }
        default: {
            return state
        }
    }
}