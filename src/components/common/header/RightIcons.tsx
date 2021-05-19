import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";

const RightIconsWrapper = styled.div`
  margin-right: 20px;
  width: 125px;
  display: flex;
  justify-content: space-between;
`;

const RoundedWrapperForImage = styled.div`
  border-radius: 50%;
  background: #e0dede;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CustomIconInsideWrapper = styled.img`
  width: 18px;
  height: 18px;
`;

const CustomImg = styled.img`
  width: 21px;
  height: 21px;
  align-self: center;
  margin-right: 5px;
`;

const NotificationCounterWrapper = styled.div`
  height: 15px;
  width: 20px;
  background: #0c8fdb;
  position: absolute;
  border-radius: 45%;
  display: flex;
  right: -6px;
  top: -3px;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: ${Colors.white};
`;

export const RightIcons: FC = () => {
  return (
    <RightIconsWrapper>
      <CustomImg src="icons/house.png" />
      <RoundedWrapperForImage>
        <CustomIconInsideWrapper src="icons/comments.png" alt="Comments" />
        <NotificationCounterWrapper>8</NotificationCounterWrapper>
      </RoundedWrapperForImage>
      <RoundedWrapperForImage>
        <CustomIconInsideWrapper src="icons/bell.png" alt="Bell" />
        <NotificationCounterWrapper>11</NotificationCounterWrapper>
      </RoundedWrapperForImage>
    </RightIconsWrapper>
  );
};
