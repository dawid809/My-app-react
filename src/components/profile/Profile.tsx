import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { ProfileHeader } from "../profile/ProfileHeader";
import { RestUserInfo } from "./RestUserInfo";
import { MainUserData } from "./MainUserData";

const ContentContext = styled.div`
  width: 100%;
`;

const ProfileWrapper = styled.div`
  min-width: 600px;
  margin: 0.5% 5%;
  padding: 0 10%;
`;

const BorderWrapper = styled.div`
  border: 1px solid ${Colors.lightGray};
`;

export const Profile: FC = () => {
  return (
    <ContentContext>
      <ProfileWrapper>
        <BorderWrapper>
          <ProfileHeader />
          <MainUserData></MainUserData>
          <RestUserInfo></RestUserInfo>
        </BorderWrapper>
      </ProfileWrapper>
    </ContentContext>
  );
};
