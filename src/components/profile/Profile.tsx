import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { CurrentUser } from "../profile/CurrentUser";

const ContentContext = styled.div`
  width: 100%;
  min-height: 1000px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const ProfileWrapper = styled.div`
  margin: 0.5% 5%;
  border: 1px solid ${Colors.gray};
  min-width: 600px;
  max-width: 600px;
`;

const TopMenu = styled.div`
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

export const Profile: FC = () => {
  return (
    <ContentContext>
      <ProfileWrapper>
        <TopMenu>
          <CustomImg src="icons/speech-bubble.png" alt="wiadomość" />
          <BoldText>Message</BoldText>
          <CustomImg src="icons/request.png" alt="zapytanie" />
          <BoldText>Create a request</BoldText>
          <CustomImg src="icons/suitcase.png" alt="grono" />
          <BoldText>Add to a clauster</BoldText>
          <CustomImg src="icons/close.png" alt="zamknij" />
        </TopMenu>
        {/* <CurrentUserWrapper>

        </CurrentUserWrapper> */}
        <CurrentUser></CurrentUser>
      </ProfileWrapper>
    </ContentContext>
  );
};
