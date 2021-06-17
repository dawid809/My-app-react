import React, { FC } from "react";
import styled from "styled-components";

import { CustomImgWithMargin } from "../../../styledHelpers/Components";
import { Profile } from "./Profile";
import { fontSize } from "../../../styledHelpers/FontSizes";
import { StyledLink } from "../../../styledHelpers/Components";
import { linkSmart } from "../smartLink/SmartLink";

const LeftWrapper = styled.div`
  padding: 36px;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const General = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const SubtitleWrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const SubtitleText = styled.a`
  font-size: ${fontSize[15]};
  margin: 5px;
`;

export const LeftMenu: FC = () => {
  return (
    <LeftWrapper>
      <Profile />
      <General>
        <SubtitleWrapper>
          <CustomImgWithMargin
            src={linkSmart("icons/publications.png")}
            alt="Publications"
          />
          <StyledLink to="/publications">
            <SubtitleText>Publications</SubtitleText>
          </StyledLink>
        </SubtitleWrapper>

        <SubtitleWrapper>
          <CustomImgWithMargin
            src={linkSmart("icons/ecosystem.png")}
            alt="Ecosystem"
          />
          <StyledLink to="/ecosystem">
            <SubtitleText>Ecosystem</SubtitleText>
          </StyledLink>
        </SubtitleWrapper>

        <SubtitleWrapper>
          <CustomImgWithMargin
            src={linkSmart("icons/entities2.png")}
            alt="Entities"
          />
          <StyledLink to="/entities">
            <SubtitleText>Entities</SubtitleText>
          </StyledLink>
        </SubtitleWrapper>
      </General>
    </LeftWrapper>
  );
};
