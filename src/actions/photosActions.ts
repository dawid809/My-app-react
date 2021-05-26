import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/photoTypes';
import { ISinglePhoto } from '../components/entitiesData/photos';


export const getPhotos = (): Promise<ISinglePhoto[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then((photosList: ISinglePhoto[]) => {
        dispatch({
            type: actionTypes.GET_PHOTOS,
            photosList
        })
    })
}) as any;