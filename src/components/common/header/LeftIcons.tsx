import React, { FC } from "react";
import styled from "styled-components";

const CustomIcon = styled.img`
  width: 22px;
  height: 22px;
  align-self: center;
`;

const Logo = styled(CustomIcon)`
  width: 32px;
  height: 32px;
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
  font-size: 1.2rem;
  margin-left: 20px;
  text-align: center;
`;

const CustomArrowIcon = styled.img`
  margin-left: 100px;
`;

export const LeftIconsContent: FC = () => {
  return (
    <LeftIconsWrapper>
      <Logo src="icons/logo.png" />
      <WraperHome>
        <CustomIcon src="icons/house2.png" />
        <TitleText>Home</TitleText>
        <CustomArrowIcon src="icons/arrow-down.png" />
      </WraperHome>
    </LeftIconsWrapper>
  );
};
