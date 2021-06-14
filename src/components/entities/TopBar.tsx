import React, { FC, useState } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import useDropdown from "react-dropdown-hook";
import { Filter } from "./Filter";
import { FollowedDropdown } from "./FollowedDropdown";
import { MosaicDropdown } from "./MosaicDropdown";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "../entities/index.css";

const TitleText = styled.h1`
  font-size: ${fontSize[22]};
  font-weight: bold;
`;

const BlueText = styled.h2`
  font-size: ${fontSize[18]};
  color: ${Colors.blue};
`;

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
`;

const CustomIcon = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 10px;
`;

const LeftTitleIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MosaicWrapper = styled.div`
  display: flex;
  background-color: #bde1f6;
  align-items: center;
  height: 100%;
  padding: 5px 5px 5px 1px;
  border-radius: 4px;
`;

const RightMosaicIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 1px solid ${Colors.lightGray};
  border-radius: 4px;
  border-left: none;
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
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
  margin-right: 15px;
  align-items: center;
`;

const BlueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${Colors.lightGray};
  border-radius: 4px;
  padding: 5px 5px;
  background-color: #bde1f6;
  cursor: pointer;
`;

const BlueIcon = styled.img`
  height: 22px;
  filter: opacity(0.5) drop-shadow(0 0 0 blue);
  margin: 0 10px;
`;

const GrayIcon = styled.img`
  height: 22px;
  margin: 0 1px;
  filter: opacity(0.5) drop-shadow(0 0 0 ${Colors.lightGray});
`;

const LineIcon = styled(GrayIcon)`
  height: 22px;
`;

const IconAndTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2px;
  color: ${Colors.darkerGray};
  cursor: pointer;
`;

const CustomFilter = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${Colors.lightGray};
  font-size: ${fontSize[18]};
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

const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

const Text = styled.h4`
  color: ${Colors.black};
  margin: 0 5px;
  font-size: ${fontSize[18]};
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  :hover {
    background-color: ${Colors.lazure};
    border-radius: 4px;
  }
`;

const FollowedContainer = styled(FilterContainer)``;
interface IFunctionallIIconsComponentProps {
  handleFullScreen: any;
  value: string;
  onChange: any;
  toggleMosaicClass: any; 
  toggleListClass: any;
}

export const FunctionallIIconsComponent: FC<IFunctionallIIconsComponentProps> =
  (props) => {
    const [filterRef, filterDropdownOpen, filterToggleDropdown] = useDropdown();

    const filterMenuHandler = () => {
      filterToggleDropdown();
    };

    const [followedRef, followedDropdownOpen, followedToggleDropdown] =
      useDropdown();

    const followedMenudHandler = () => {
      followedToggleDropdown();
    };

    const url = window.location.href;

    function handleChange(event: any): void {
      props.onChange(event.target.value);
    }

    const [mosaicRef, mosaicDropdownOpen, mosaicToggleDropdown] = useDropdown();

  const mosaicMenudHandler = () => {
    mosaicToggleDropdown();
  };

    return (
      <div ref={filterRef} style={{ margin: "5px 20px" }}>
        <TopBarWrapper>
      <LeftTitleIconWrapper>
        <TitleText>Entities</TitleText>
        <CustomIcon src="icons/cog.png" alt="Cog icon" />
      </LeftTitleIconWrapper>
      <div ref={mosaicRef} style={{ position: "relative" }}>
        <RightMosaicIconWrapper onClick={mosaicMenudHandler}>
          <MosaicWrapper onClick={props.toggleMosaicClass}>
            <BlueIcon src="icons/mosaic.png" alt="Mosaic icon" />
            <BlueText> Mosaic </BlueText>
          </MosaicWrapper>
          <CustomIcon onClick={props.toggleListClass} src="icons/menu.png" alt="Menu icon"  />
        </RightMosaicIconWrapper>
        {mosaicDropdownOpen && <MosaicDropdown toggleMosaicClass={props.toggleMosaicClass} toggleListClass={props.toggleListClass}/>}
      </div>
    </TopBarWrapper>
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
                style={{ height: "7px", width: "11px" }}
              />
            </BlueWrapper>
            <GrayIcon
              src="icons/more.png"
              alt="More icon"
              style={{ marginLeft: "15px" }}
            />
            <LineIcon src="icons/vertical-line.png" />
            <IconAndTextWrapper>
              <GrayIcon src="icons/sort.png" alt="Sort icon" />
              <Text>Sort</Text>
            </IconAndTextWrapper>
            <div ref={filterRef} style={{ position: "relative" }}>
              <FilterContainer onClick={filterMenuHandler}>
                <IconAndTextWrapper>
                  <GrayIcon src="icons/filter.png" alt="Filter icon" />
                  <Text>Filters</Text>
                </IconAndTextWrapper>
              </FilterContainer>
            </div>
            <IconAndTextWrapper>
              <LineIcon src="icons/vertical-line.png" />
              <GrayIcon
                onClick={props.handleFullScreen.enter}
                src="icons/expand.png"
                alt="Expand icon"
              />
              <LineIcon src="icons/vertical-line.png" />
            </IconAndTextWrapper>
            <CopyToClipboard text={url}>
              <IconAndTextWrapper>
                <GrayIcon src="icons/share.png" alt="Share icon" />
                <Text>Share</Text>
              </IconAndTextWrapper>
            </CopyToClipboard>
          </LeftWrapper>

          <RightWrapper>
            <SearchContainer>
              <CustomFilter
                type="text"
                placeholder="Search..."
                value={props.value}
                onChange={handleChange}
              />
              <GrayIcon
                src="icons/search.png"
                alt="Search icon"
                style={{ marginLeft: "-30px" }}
              />
            </SearchContainer>
            <LineIcon src="icons/vertical-line.png" />
            <div ref={followedRef} style={{ position: "relative" }}>
              <FollowedContainer onClick={followedMenudHandler}>
                <IconWrapper style={{ padding: "5px" }}>
                  <BlueIcon src="icons/broadcast.png" alt="Broadcast icon" />
                  <BlueText>Followed</BlueText>
                  <BlueIcon
                    src="icons/arrow-down.png"
                    alt="Arrow down icon"
                    style={{ height: "7px", width: "11px" }}
                  />
                </IconWrapper>
              </FollowedContainer>
              {followedDropdownOpen && <FollowedDropdown />}
            </div>
          </RightWrapper>
        </HeaderWrapper>
        {filterDropdownOpen && <Filter />}
      </div>
    );
  };
