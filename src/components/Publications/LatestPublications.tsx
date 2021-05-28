import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Colors } from "../../styledHelpers/Colors";

import { getUsers } from "../../actions/usersActions";
import { getPhotos } from "../../actions/photosActions";
import { getPosts } from "../../actions/postsActions";

import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { IPostsReducer } from "../../reducers/postsReducer";
import { fontSize } from "../../styledHelpers/FontSizes";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;

const PublicationsWrapper = styled.div`
  display: flex;
  height: 260px;
  margin: 0.5% 5%;
  box-shadow: ${Colors.shadow};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

const BigPhoto = styled.img`
  height: 100%;
`;

const OnPhotoContainer = styled.div`
  height: 100%;
  width: 260px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  position: absolute;
  z-index: 6;
  bottom: 10px;
`;

const LatestPublicationsWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const SinglePublication = styled.a`
  display: flex;
  width: 100%;
  color: ${Colors.white};
  margin: 0 10px 0 5px;
  font-size: ${fontSize[14]};
  line-height: 1.4;
`;

const SinglePublicationWrapper = styled.div`
  z-index: 5;
  display: flex;
  margin: 5px;
`;

const DateAndUserContainer = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  color: ${Colors.black};
  margin: 5px;
`;

const Date = styled.h6`
  color: ${Colors.white};
`;

const UserPhoto = styled.img`
  border-radius: 50%;
  width: 17px;
  height: 17px;
  margin: 0 5px;
`;

const TitleText = styled.h2`
  margin: 2px 5px;
  font-size: ${fontSize[20]};
  font-weight: bold;
`;

const LinkText = styled.h3`
  color: ${Colors.blue};
  margin: 3px 5px;
  cursor: pointer;
`;

const SmallPhoto = styled.img`
  max-height: 55px;
  max-width: 55px;
`;

export const LatestPublications: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
  }, []);

  const { usersList, photosList, postsList, currentUser } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer & IPostsReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
    ...globalState.posts,
  }));

  return (
    <PublicationsWrapper>
      <OnPhotoContainer>
        <BigPhoto src={photosList[currentUser?.id]?.url} alt="Big photo" />
        <ContentContainer>
          <SinglePublication>{postsList[currentUser?.id]?.title}</SinglePublication>
          <DateAndUserContainer>
            <Date>7.07.2012</Date>
            <UserPhoto src={photosList[currentUser?.id]?.url} />
            <Date style={{ color: `${Colors.darkerGray}` }}>{usersList[currentUser?.id]?.name}</Date>
          </DateAndUserContainer>
        </ContentContainer>
      </OnPhotoContainer>

      <LatestPublicationsWrapper>
        <TitleText>Latest publications</TitleText>
        <SinglePublicationWrapper>
          <SmallPhoto src={photosList[currentUser?.id]?.url} alt="photo" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SinglePublication style={{ color: "black" }}>
              {postsList[currentUser?.id]?.title}
            </SinglePublication>
            <DateAndUserContainer>
              <Date style={{ color: "black" }}>7.07.2012</Date>
              <UserPhoto src={photosList[currentUser?.id]?.url} />
              <Date style={{ color: "black" }}>{usersList[currentUser?.id]?.name}</Date>
            </DateAndUserContainer>
          </div>
        </SinglePublicationWrapper>

        <SinglePublicationWrapper>
          <SmallPhoto src={photosList[currentUser?.id]?.url} alt="photo" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SinglePublication style={{ color: "black" }}>
              {postsList[currentUser?.id]?.title}
            </SinglePublication>
            <DateAndUserContainer>
              <Date style={{ color: "black" }}>7.07.2012</Date>
              <UserPhoto src={photosList[currentUser?.id]?.url} />
              <Date style={{ color: "black" }}>{usersList[currentUser?.id]?.name}</Date>
            </DateAndUserContainer>
          </div>
        </SinglePublicationWrapper>

        <SinglePublicationWrapper>
          <SmallPhoto src={photosList[currentUser?.id]?.url} alt="photo" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SinglePublication style={{ color: "black" }}>
              {postsList[currentUser?.id]?.title}
            </SinglePublication>
            <DateAndUserContainer>
              <Date style={{ color: "black" }}>7.07.2012</Date>
              <UserPhoto src={photosList[currentUser?.id]?.url} />
              <Date style={{ color: "black" }}>{usersList[currentUser?.id]?.name}</Date>
            </DateAndUserContainer>
          </div>
        </SinglePublicationWrapper>
        <LinkText>See more publications</LinkText>
      </LatestPublicationsWrapper>
    </PublicationsWrapper>
  );
};
