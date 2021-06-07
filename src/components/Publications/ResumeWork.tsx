import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from "../../styledHelpers/FontSizes";
import "../publications/index.css";

import { Pagination } from "../publications/Pagination";
import  Followed  from "../publications/Followed";

const ResumeWorkWrapper = styled.div`
  position: relative;
  margin: 0.5% 5%;
`;

const TopContainer = styled.div`
  margin: 10px 5px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  align-self: center;
  font-weight: bold;
  font-size: ${fontSize[20]};
`;

const RightIconsAndTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SmallImg = styled.img`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  align-self: center;
`;

const SearchImg = styled(SmallImg)`
  width: 16px;
  height: 16px;
  margin-left: -23px;
`;

const MediumImg = styled(SmallImg)`
  width: 20px;
  height: 20px;
  filter: invert(16%) sepia(62%) saturate(3838%) hue-rotate(237deg)
    brightness(78%) contrast(106%);
`;

const SmallImgArrow = styled.img`
  width: 9px;
  height: 6px;
  margin: 0 5px;
  filter: invert(16%) sepia(62%) saturate(3838%) hue-rotate(237deg)
    brightness(78%) contrast(106%);
`;

const CustomFilter = styled.input`
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${Colors.lightGray};
  outline: none;
  :focus {
    border-color: ${Colors.black};
  }
  ::placeholder {
    color: ${Colors.gray};
  }
  &:hover {
    background: ${Colors.whiteSmoke};
  }
`;

const FilterContainer = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

const FollowedContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  :hover {
    background-color: ${Colors.lazure};
    border-radius: 4px;
  }
`;

const Subtititle = styled.h3`
  color: ${Colors.blue};
  margin: 5px 0;
`;

export const ResumeWork: FC = () => {

  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const menuHandler = () => {
    toggleDropdown();
  };

  return (
    <ResumeWorkWrapper>
      <TopContainer>
        <Title>Resume your work </Title>
        <RightIconsAndTextWrapper>
          <FilterContainer>
            <CustomFilter type="text" placeholder="Filter by title..." />
            <SearchImg
              src="icons/search.png"
              alt="filtrowanie"
            />
          </FilterContainer>

          <div ref={wrapperRef} style={{position: "relative"}}>
          <FollowedContainer onClick={menuHandler}>
            <MediumImg src="icons/broadcast.png" alt="transmitowanie" />
            <Subtititle>Followed</Subtititle>
            <SmallImgArrow src="icons/arrow-down.png" alt="strzałka-dół" />
          </FollowedContainer>
          {dropdownOpen && <Followed />}
          </div>
        </RightIconsAndTextWrapper>
      </TopContainer>
      <Pagination/>
    </ResumeWorkWrapper>
  );
};
