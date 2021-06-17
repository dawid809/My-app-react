import { ISingleAlbum } from "../../entities/albums";
export const GET_ALBUMS = "GET_ALBUMS";

export interface IAlbumTypes {
  GET_ALBUMS: {
    albumsList: ISingleAlbum[];
  };
}
