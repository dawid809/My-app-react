import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

const BlueText = styled.h2`
  font-size: ${fontSize[16]};
  color: #202099;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 5px 20px;
`;

const CustomIcon = styled.img`
  width: auto;
  height: 18px;
  margin: 0 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.blue};
  border-radius: 4px;
`;

// const MosaicWrapper = styled.div`
//   background-color: ${Colors.lightBlueBackground};
//   border-radius: 4px;
//   padding: 2px;
//   border: 1px solid ${Colors.lightGray};
// `;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
`;

const BlueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${Colors.lightGray};
  border-radius: 4px;
  padding: 5px 0;
  background-color: #bde1f6;
`;

const BlueIcon = styled(CustomIcon)`
  filter: invert(16%) sepia(62%) saturate(3838%) hue-rotate(237deg)
    brightness(78%) contrast(106%);
`;

const IconAndTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2px;
  color: ${Colors.darkerGray};
  cursor: pointer;
`;

const CustomFilter = styled.input`
  padding: 5px;
  width: 85%;
  border-radius: 5px;
  border: 1px solid ${Colors.lightGray};
  outline: none;
  :focus {
    border-color: ${Colors.black};
  }
  ::placeholder {
    color: ${Colors.gray};
    padding-left: 10px;
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

const Text = styled.h4`
  color: black;
  margin-left: -4px;
`;

// const GrayIcons = styled(CustomIcon)`
// filter: invert(63%) sepia(14%) saturate(22%) hue-rotate(71deg) brightness(91%) contrast(95%);
// `;

export const FunctionallIIconsComponent: FC = () => {
  return (
    <HeaderWrapper>
      <LeftWrapper>
        <BlueWrapper>
          <BlueIcon
            src="icons/circle-outline-with-a-central-dot.png"
            alt="Circle icon"
          />
          <BlueText>All</BlueText>
          <BlueIcon
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ height: "10px", width: "10px" }}
          />
        </BlueWrapper>
        <CustomIcon
          src="icons/more.png"
          alt="More icon"
          style={{
            borderRight: `1px solid ${Colors.black}`,
            padding: "5px 10px",
            cursor: "pointer"
          }}
        />
        <IconAndTextWrapper>
          <CustomIcon src="icons/sort.png" alt="Sort icon" />
          <Text>Sort</Text>
        </IconAndTextWrapper>
        <IconAndTextWrapper>
          <CustomIcon src="icons/filter.png" alt="Filter icon" />
          <Text>Filters</Text>
        </IconAndTextWrapper>
        <CustomIcon
          src="icons/expand.png"
          alt="Expand icon"
          style={{
            borderRight: `1px solid ${Colors.black}`,
            borderLeft: `1px solid ${Colors.black}`,
            padding: "5px 10px",
            cursor: "pointer"
          }}
        />
        <IconAndTextWrapper>
          <CustomIcon src="icons/share.png" alt="Share icon" />
          <Text>Share</Text>
        </IconAndTextWrapper>
      </LeftWrapper>

      <RightWrapper>
        <FilterContainer>
          <CustomFilter type="text" placeholder="Search..." />
          <CustomIcon
            src="icons/search.png"
            alt="Search icon"
            style={{ marginLeft: "-30px", width: "16px", height: "16px" }}
          />
        </FilterContainer>
        <div
          style={{
            borderRight: `1px solid ${Colors.lightGray}`,
            margin: "0 15px 0 -5px",
          }}
        ></div>
        <IconWrapper>
          <BlueIcon src="icons/broadcast.png" alt="Broadcast icon" />
          <BlueText>Followed</BlueText>
          <BlueIcon
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ height: "10px", width: "10px" }}
          />
        </IconWrapper>
      </RightWrapper>
    </HeaderWrapper>
  );
};
