import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { SingleEntity } from "./SingleEntity";
import { FunctionallIIconsComponent } from "./TopBar";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { getUsers } from "../../actions/usersActions";
import { getPhotos } from "../../actions/photosActions";
import { getPosts } from "../../actions/postsActions";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { IPostsReducer } from "../../reducers/postsReducer";

import "../entities/index.css";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;

const EntitiesWrapper = styled.div`
  width: 100%;
  min-height: 1000px;
`;

const EntitiesContent = styled.div`
  background: ${Colors.whiteSmoke};
  margin: 1% 5%;
`;

const CompanyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  margin: 10px 20px;
  position: relative;
`;

export const Entities: FC = () => {
  const handleFullScreen = useFullScreenHandle();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
  }, []);

  const { usersList, photosList, currentUser, postsList } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer & IPostsReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
    ...globalState.posts,
  }));

  const [searchState, setSearchState] = useState("");
 

  function handleChange(newValue: string) {
    setSearchState(newValue);
  }

  const [isMosaicActive, setMosaicActive] = useState(false);

  const toggleMosaicClass = () => {
    if(isMosaicActive == true)
    setMosaicActive(!isMosaicActive);
    else (toggleListClass);
  };

  const toggleListClass = () => {
    if(isMosaicActive == false)
    setMosaicActive(!isMosaicActive);
    else return;
  };


  return (
    <EntitiesWrapper>
      <FullScreen handle={handleFullScreen}>
        <EntitiesContent>
          <FunctionallIIconsComponent
            handleFullScreen={handleFullScreen}
            value={searchState}
            onChange={handleChange}
            toggleMosaicClass={toggleMosaicClass}
            toggleListClass={toggleListClass}
          />
          <CompanyWrapper className={isMosaicActive? 'mosaic' : null} >
            {photosList
              .slice(0, 32)
              .filter((val) => {
                if (searchState == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchState.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <SingleEntity
                    key={val.id}
                    url={val.url}
                    title={val.title}
                    id={val.id}
                  />
                );
              })}
          </CompanyWrapper>
        </EntitiesContent>
      </FullScreen>
    </EntitiesWrapper>
  );
};
