import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import "../publications/index.css";

import { Pagination} from "../publications/Pagination";

const ResumeWorkWrapper = styled.div`
  position: relative;
  background: whitesmoke;
  height: 400px;
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

const MediumImg = styled(SmallImg)`
  width: 16px;
  height: 16px;;
`;

const SmallImgArrow = styled.img`
  width: 8px;
  height: 5px;
  margin: 0 5px;
`;

const CustomInput = styled.input`
  border-color: gray;
  padding: 3px;
  border-radius: 5px;
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
`;

const Subtititle = styled.h3`
  color: blue;
  margin: 5px 0;
`;

export const ResumeWork: FC = () => {

  return (
    <ResumeWorkWrapper>
      <TopContainer>
        <Title>Resume your work </Title>
        <RightIconsAndTextWrapper>
          <FilterContainer>
            <CustomInput type="text" placeholder="Filter by title..." />
            <MediumImg
              src="icons/search.png"
              alt="filtrowanie"
              style={{ marginLeft: "-20px" }}
            />
          </FilterContainer>
          <FollowedContainer>
            <MediumImg src="icons/broadcast.png" alt="transmitowanie" />
            <Subtititle>Followed</Subtititle>
            <SmallImgArrow src="icons/arrow-down.png" alt="strzałka-dół" />
          </FollowedContainer>
        </RightIconsAndTextWrapper>
      </TopContainer>
      <Pagination/>
    </ResumeWorkWrapper>
  );
};
