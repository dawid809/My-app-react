import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Colors } from "../../styledHelpers/Colors";
import { SingleEntity } from "./SingleEntity";
import { FunctionalTopBar } from "./FunctionalTopBar";
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin: 10px 20px;
  position: relative;
`;

export const Entities: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
  }, []);

  const { photosList } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer & IPostsReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
    ...globalState.posts,
  }));

  const handleFullScreen = useFullScreenHandle();

  const [searchState, setSearchState] = useState("");

  function handleSearchChange(newValue: string) {
    setSearchState(newValue);
  }

  const [isListActive, setListActive] = useState(false);

  const setMosaicClass = () => {
    if (isListActive == true) setListActive(!isListActive);
    else setListClass;
  };

  const setListClass = () => {
    if (isListActive == false) setListActive(!isListActive);
    else return;
  };

  const [isSorted, setIsSorted] = useState(true);

  const toggleIsSorted = () => {
    setIsSorted(!isSorted);
  };

  const [isFollowed, setFollowed] = useState(false);

  const handleIsFollowed = () => {
    if (isFollowed == false) setFollowed(!isFollowed);
    else setAllFollowed;
  };

  const setAllFollowed = () => {
    if (isFollowed == true) setFollowed(!isFollowed);
    else return;
  };

  return (
    <EntitiesWrapper>
      <FullScreen handle={handleFullScreen}>
        <EntitiesContent>
          <FunctionalTopBar
            handleFullScreen={handleFullScreen}
            value={searchState}
            handleSearchChange={handleSearchChange}
            setMosaicClass={setMosaicClass}
            setListClass={setListClass}
            toggleIsSorted={toggleIsSorted}
            handleIsFollowed={handleIsFollowed}
            setAllFollowed={setAllFollowed}
          />
          <CompanyWrapper className={isListActive ? "list" : null}>
            {photosList
              .slice(0, 33)
              .sort((a, b) =>
                isSorted
                  ? a.title.localeCompare(b.title)
                  : b.title.localeCompare(a.title)
              )
              .filter((val) => {
                if (searchState == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchState.toLowerCase())
                ) {
                  return val;
                }
              })
              .filter((val) => {
                if (isFollowed == true) {
                  return val.id == 1;
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
