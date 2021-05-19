import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { CurrentUser } from "../profile/CurrentUser";
import { ProfileHeader } from '../profile/ProfileHeader';
import { PanelInformation } from '../profile/PanelInformations';

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
  min-width: 800px;
  width: 80%;
  margin-left: 0%;
`;

export const Profile: FC = () => {
  return (
    <ContentContext>
      <ProfileWrapper>
      <ProfileHeader/>
        {/* <CurrentUserWrapper>

        </CurrentUserWrapper> */}
        <CurrentUser></CurrentUser>
      </ProfileWrapper>
    </ContentContext>
  );
};
