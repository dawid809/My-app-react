import React, { FC } from "react";
import styled from "styled-components";
import { linkSmart } from "../common/smartLink/SmartLink";

const ProfileHeaderWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`;

const CustomImg = styled.img`
  width: 14px;
  height: 14px;
  align-self: center;
  margin: 0 10px;
  cursor: pointer;
`;

const BoldText = styled.h2`
  font-weight: bold;
`;

export const ProfileHeader: FC = () => {
  return (
    <ProfileHeaderWrapper>
      <CustomImg src={linkSmart("icons/speech-bubble.png")} alt="wiadomość" />
      <BoldText>Message</BoldText>
      <CustomImg src={linkSmart("icons/request.png")} alt="zapytanie" />
      <BoldText>Create a request</BoldText>
      <CustomImg src={linkSmart("icons/suitcase.png")} alt="grono" />
      <BoldText>Add to a clauster</BoldText>
      <CustomImg src={linkSmart("icons/close.png")} alt="zamknij" />
    </ProfileHeaderWrapper>
  );
};
