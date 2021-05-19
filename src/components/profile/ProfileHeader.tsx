import React, { FC } from "react";
import styled from "styled-components";

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
      <CustomImg src="icons/speech-bubble.png" alt="wiadomość" />
      <BoldText>Message</BoldText>
      <CustomImg src="icons/request.png" alt="zapytanie" />
      <BoldText>Create a request</BoldText>
      <CustomImg src="icons/suitcase.png" alt="grono" />
      <BoldText>Add to a clauster</BoldText>
      <CustomImg src="icons/close.png" alt="zamknij" />
    </ProfileHeaderWrapper>
  );
};
