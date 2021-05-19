import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Colors } from "../../../styledHelpers/Colors";
import { CustomImg } from "../../../styledHelpers/Components";
import { CustomImageWithBorder } from "../../../styledHelpers/Components";
import { getUsers } from "../../../actions/usersActions";
import { getPhotos } from "../../../actions/photosActions";

import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IPhotosReducer } from "../../../reducers/photosReducer";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;

const ProfileWrapper = styled.div`
  box-shadow: -1px 2px 10px -1px #9e9696;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const NameText = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: ${Colors.blue};
  text-align: center;
`;

const SubtitleText = styled.a`
  font-size: 0.9rem;
  font-weight: 700;
  margin: 5px;
  margin-left: 10px;
`;

const GrayText = styled.h4`
  font-size: 0.8rem;
  color: ${Colors.gray};
  text-align: center;
  margin: 10px;
`;

const SubtitleWrapper = styled.div`
  margin: 8px 10px;
  display: flex;
  position: relative;
`;

const AboutMe = styled.div`
  border-top: 1px solid lightgray;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

const UserAvatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 28%;
  height: 28%;
  margin: 5px;
`;

export const Profile: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
  }, []);

  const { usersList, photosList } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
  }));

  return (
    <ProfileWrapper>
      {console.log({ usersList })}
      {console.log({ photosList })}

      <UserAvatar src={photosList[0]?.url} alt="User photo" />
      <NameText>{usersList[0]?.name}</NameText>
      <GrayText>Job title - {usersList[0]?.company.name}</GrayText>

      <AboutMe>
        <SubtitleWrapper>
          <CustomImg src="icons/network.png" alt="Network" />
          <SubtitleText>Your network</SubtitleText>
          <CustomImageWithBorder src="icons/user-plus.png" alt="Add user" />
        </SubtitleWrapper>

        <SubtitleWrapper>
          <CustomImg src="icons/publications.png" alt="Publications" />
          <SubtitleText>Your publications</SubtitleText>
          <CustomImageWithBorder src="icons/plus.png" alt="Icons" />
        </SubtitleWrapper>
      </AboutMe>
    </ProfileWrapper>
  );
};
