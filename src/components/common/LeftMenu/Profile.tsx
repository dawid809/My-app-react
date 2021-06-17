import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Colors } from "../../../styledHelpers/Colors";
import { fontSize } from "../../../styledHelpers/FontSizes";
import { StyledLink } from "../../../styledHelpers/Components";
import { CustomImg } from "../../../styledHelpers/Components";
import { CustomImageWithBorder } from "../../../styledHelpers/Components";
import { getUsers } from "../../../actions/usersActions";
import { getPhotos } from "../../../actions/photosActions";

import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IPhotosReducer } from "../../../reducers/photosReducer";
import {linkSmart} from "../smartLink/SmartLink";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;

const ProfileWrapper = styled.div`
  box-shadow: ${Colors.shadow};
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const NameText = styled.h2`
  font-size: ${fontSize[18]};
  font-weight: bold;
  color: ${Colors.blue};
  text-align: center;
`;

const SubtitleText = styled.a`
  font-size: ${fontSize[15]};
  font-weight: bold;
  margin: 5px;
  margin-left: 10px;
  &:hover {
    color: ${Colors.blue};
    cursor: pointer;
  }
`;

const GrayText = styled.h4`
  font-size: ${fontSize[14]};
  color: ${Colors.gray};
  text-align: center;
  margin: 10px;
`;

const SubtitleWrapper = styled.div`
  margin: 8px 10px;
  display: flex;
  position: relative;
  align-items: center;
`;

const AboutMe = styled.div`
  border-top: 1px solid ${Colors.lightGray};
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

  const { usersList, photosList, currentUser } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
  }));

  return (
    <ProfileWrapper>
      <StyledLink to="/profile">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <UserAvatar
            src={photosList?.[currentUser?.id - 1]?.url}
          
            alt="User photo"
          />
          <NameText>{usersList?.[currentUser?.id-1]?.name}</NameText>
          <GrayText>
            Job title - {usersList[currentUser?.id-1]?.company.name}
          </GrayText>
        </div>
      </StyledLink>

      <AboutMe>
        <SubtitleWrapper>
          <CustomImg src={linkSmart("icons/network.png")} alt="Network" />
          <StyledLink to="/testPage">
            <SubtitleText>Your network</SubtitleText>
            <CustomImageWithBorder src={linkSmart("icons/user-plus.png")} alt="Add user" />
          </StyledLink>
        </SubtitleWrapper>

        <SubtitleWrapper>
          <CustomImg src={linkSmart("icons/publications.png")} alt="Publications" />
          <StyledLink to="/testPage">
            <SubtitleText>Your Publications</SubtitleText>
          </StyledLink>
          <CustomImageWithBorder src={linkSmart("icons/plus.png")} alt="Icons" />
        </SubtitleWrapper>
      </AboutMe>
    </ProfileWrapper>
  );
};
