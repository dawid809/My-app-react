import React, { FC, useState } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { getUsers } from "../../actions/usersActions";
import { getPhotos } from "../../actions/photosActions";

import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { linkSmart } from "../common/smartLink/SmartLink";

const InternalCorrespondantsWrapper = styled.div`
  margin: 10px;
`;

const SingleUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  background: ${Colors.lazure};
  margin: 10px 0;
  align-items: center;
`;

const TitleText = styled.h1`
  font-weight: bold;
  font-size: 1.1em;
  padding: 5px 0;
  margin-bottom: 15px;
`;

const CustomText = styled.h3`
  margin-right: 24px;
`;

const BoldText = styled(CustomText)`
  font-weight: bold;
`;

const CustomImg = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 5px;
`;

const UserAvatar = styled(CustomImg)`
  width: 25px;
  height: 25px;
`;

export const InternalCorrespondants: FC = () => {
  return (
    <InternalCorrespondantsWrapper>
      <TitleText>Internal correspondants </TitleText>
      <SingleUserWrapper>
        <UserAvatar src={linkSmart("icons/profile.png")} alt="fotka" />
        <BoldText>Imie Nazwisko</BoldText>
        <CustomImg src={linkSmart("icons/speech-bubble.png")} alt="wiadomość" />
        <CustomText>Message</CustomText>
        <CustomImg src={linkSmart("icons/user.png")} alt="wiadomość" />
        <CustomText>Profile</CustomText>
      </SingleUserWrapper>

      <SingleUserWrapper>
        <UserAvatar src={linkSmart("icons/profile.png")} alt="fotka" />
        <BoldText>Imie Nazwisko</BoldText>
        <CustomImg src={linkSmart("icons/speech-bubble.png")} alt="wiadomość" />
        <CustomText>Message</CustomText>
        <CustomImg src={linkSmart("icons/user.png")} alt="wiadomość" />
        <CustomText>Profile</CustomText>
      </SingleUserWrapper>
    </InternalCorrespondantsWrapper>
  );
};
