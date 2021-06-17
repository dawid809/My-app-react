import React, { FC } from "react";
import styled from "styled-components";
import { fontSize } from '../../../styledHelpers/FontSizes';
import { linkSmart } from "../smartLink/SmartLink";

const CustomIcon = styled.img`
  width: 22px;
  height: 22px;
  align-self: center;
`;

const LeftIconsWrapper = styled.div`
  margin-left: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const WraperHome = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: ${fontSize[20]};
  margin-left: 20px;
  text-align: center;
`;

const CustomArrowIcon = styled.img`
  margin-left: 120px;
`;

export const LeftIconsContent: FC = () => {
  return (
    <LeftIconsWrapper>
      <WraperHome>
        <CustomIcon src={linkSmart("icons/house2.png")} alt="home" />
        <TitleText>Home</TitleText>
        <CustomArrowIcon src={linkSmart("icons/arrow-down.png")} alt="arrow down" />
      </WraperHome>
    </LeftIconsWrapper>
  );
};
