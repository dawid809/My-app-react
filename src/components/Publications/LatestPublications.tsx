import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Colors } from "../../styledHelpers/Colors";
import { StyledLink } from "../../styledHelpers/Components";
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
  margin: 0.5% 5%;
  box-shadow: ${Colors.shadow};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  min-height: 300px;
`;

const LatestPublicationsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const DateAndUserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const TitleText = styled.h2`
  margin: 2px 10px;
  font-size: ${fontSize[20]};
  font-weight: bold;
`;

const LinkText = styled.h3`
  color: ${Colors.blue};
  margin: 10px 10px;
  cursor: pointer;
  font-weight: bold;
`;

const PhotoBackgroundWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: inset 0px -50px 50px -10px rgba(0, 0, 0, 0.75);
  background-image: url("icons/skyscrapers.png");
  width: 35%;
  background-size: cover;
  img {
    width: 20px;
    border-radius: 50%;
  }

  h2 {
    font-weight: bold;
    color: ${Colors.whiteSmoke};
  }

  h3 {
    color: ${Colors.lightGray};
    margin-right: 10px;
  }

  h4 {
    color: ${Colors.gray};
    margin-left: 10px;
  }
`;

const SinglePublication = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 10px;

  div {
    width: 100%;
    padding: 5px;
  }

  img {
    filter: grayscale(40%) sepia(10%) brightness(105%) saturate(150%)
      opacity(85%) contrast(100%) invert(10%);
    height: 100%;

    width: 70px;
    max-width: 100px;

    object-fit: cover;
  }
  h2 {
    font-weight: bold;
    width: 100%;
  }

  h3 {
    color: ${Colors.gray};
    margin-right: 10px;
  }

  h4 {
    color: ${Colors.darkerGray};
    margin-left: 10px;
  }
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
      <PhotoBackgroundWrapper>
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px 15px",
            }}
          >
            <h2>{postsList[currentUser?.id-1]?.body}</h2>
            <DateAndUserContainer>
              <h3>7 jan. 2020</h3>
              <img src={photosList[currentUser?.id-1]?.url} alt="photo" />
              <h4>{usersList[currentUser?.id-1]?.name}</h4>
            </DateAndUserContainer>
          </div>
        </div>
      </PhotoBackgroundWrapper>

      <LatestPublicationsWrapper>
        <TitleText>Latest publications</TitleText>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          {postsList.slice(1, 4).map((val) => {
            return (
              <SinglePublication key={val.id}>
                <img src="icons/writing-contract.png" alt="writing-man" />
                <div>
                  <h2>{val.body}</h2>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "5px",
                      alignItems: "center",
                    }}
                  >
                    <h3>7 jan. 2020</h3>
                    <img
                      src={photosList[currentUser?.id-1]?.url}
                      style={{ width: "20px", borderRadius: "50%" }}
                    ></img>
                    <h4>{usersList[currentUser?.id-1]?.name}</h4>
                  </div>
                </div>
              </SinglePublication>
            );
          })}
        </div>
        <StyledLink to="/testPage">
          <LinkText>See more publications</LinkText>
        </StyledLink>
      </LatestPublicationsWrapper>
    </PublicationsWrapper>
  );
};
