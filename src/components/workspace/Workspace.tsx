import React, { FC, useState } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

import { FaBeer } from 'react-icons/fa';

import { CorporateMatters } from "./CorporateMatters";
import { Pagination } from "../publications/Pagination";
import Followed from "../publications/Followed";
import { linkSmart } from "../common/smartLink/SmartLink";

const WorkspaceWrapper = styled.div`
  width: 100%;
  min-height: 1000px;
`;

const WorkspaceContent = styled.div`
  display: flex;
  margin: 0.5% 5%;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  flex-direction: column;
`;

const TopBarWrapper = styled.div`
  border: ${Colors.border};
  margin: 0 20px 15px 20px;
  border-radius: 5px;
  overflow: hidden;

  h1 {
    font-size: ${fontSize[20]};
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    color: ${Colors.darkerGray};
  }
`;

const TopContainer = styled.div`
  margin: 10px 5px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const TopBarTextAndImg = styled.div`
  padding: 15px;
  margin-bottom: 20px;

  .float-left-wrapper {
    float: left;
    margin-right: 20px;
  }

  .title-text-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: -5px;
    }
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

const TileList = styled.div`
  width: 100%;

  ul {
    display: flex;
  }

  li {
    margin: 5px;
    padding: 5px 10px;
    border: ${Colors.border};
    border-radius: 4px;
    display: flex;
    flex-direction: row;

    i {
      width: 17px;
    }

    span {
      margin-right: 8px;
    }
  }
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
  width: 22px;
  height: 22px;
  filter: opacity(0.4) drop-shadow(0 0 0 blue);
`;

const SmallImgArrow = styled.img`
  width: 9px;
  height: 6px;
  margin: 0 5px;
  filter: opacity(0.4) drop-shadow(0 0 0 blue);
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

interface IWorkspaceProps {
  name: string;
  src: string;
}

export const Workspace: FC<IWorkspaceProps> = (props) => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const menuHandler = () => {
    toggleDropdown();
  };

  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const [isFollowed, setFollowed] = useState(false);

  const handleIsFollowed = () => {
    if (isFollowed == false) setFollowed(!isFollowed);
    else setAllFollowed;
  };

  const setAllFollowed = () => {
    if (isFollowed == true) setFollowed(!isFollowed);
    else return;
  };

  const tileData = [
    { title: "All", color: "#a673c0", backgoundColor: "#EECEFE"},
    { title: "SAS", color: "#1fb861", backgoundColor: "#00FF6D"},
    { title: "SARL", color: "#3ca89e", backgoundColor: "#BFF7F1"},
    { title: "Secondary business", color: "#ccb419", backgoundColor: "#F5D305"},
    { title: "Communities", color: "#665f5f", backgoundColor: "#BABABA"},
    { title: "POA", color: "#949c97", backgoundColor: "#DADDDB"},
    { title: "Survey", color: "#c4c9c5", backgoundColor: "#e6e9e6"},
    { title: "...", color: "#e6ece8", backgoundColor: "#f7f8f7"},
  ];

  const name = props.name;
  const imgUrl = props.src;

  return (
    <WorkspaceWrapper>
      <WorkspaceContent>
        <div>
          <TopBarWrapper>
            <div style={{ position: "relative" }}>
              <BackgroundImg src="../icons/table.png" alt="photo" />
            </div>
            <TopBarTextAndImg>
              <div className="float-left-wrapper">
                <img
                  src={linkSmart(imgUrl)}
                  alt="icon"
                  style={{ width: "55px" }}
                />
              </div>
              <div className="title-text-wrapper">
                <h1>{name}</h1>
                <img
                  src={linkSmart("icons/cog.png")}
                  alt="icon"
                  style={{ width: "20px" }}
                />
              </div>
              <p>
                Workspace purposa and a bit of context. This much needed
                description is here to remind peope where they are, if they are
                new or ahve poor memory
              </p>
            </TopBarTextAndImg>
          </TopBarWrapper>
          <CorporateMatters />
        </div>

        <TopContainer>
          <Title>Latest updates </Title>
          <RightIconsAndTextWrapper>
            <FilterContainer>
              <CustomFilter
                type="text"
                placeholder="Filter by title..."
                onChange={onSearchChange}
              />
              <SearchImg
                src={linkSmart("icons/search.png")}
                alt="filtrowanie"
              />
            </FilterContainer>

            <div ref={wrapperRef} style={{ position: "relative" }}>
              <FollowedContainer onClick={menuHandler}>
                <MediumImg
                  src={linkSmart("icons/broadcast.png")}
                  alt="transmitowanie"
                />
                <Subtititle>Followed</Subtititle>
                <SmallImgArrow
                  src={linkSmart("icons/arrow-down.png")}
                  alt="strzałka-dół"
                />
              </FollowedContainer>
              {dropdownOpen && (
                <Followed
                  handleIsFollowed={handleIsFollowed}
                  setAllFollowed={setAllFollowed}
                />
              )}
            </div>
          </RightIconsAndTextWrapper>
        </TopContainer>

        <TileList>
          <ul>
            {tileData.map((value) => (
              <li key={value.title} style={{ backgroundColor: value.backgoundColor }}>
                <span>
               <FaBeer color={value.color}/>
                </span>
                <h3 style={{color: value.color}}>{value.title}</h3>
              </li>
            ))}
          </ul>
        </TileList>

        <Pagination searchValue={searchValue} isFollowed={isFollowed} />
      </WorkspaceContent>
    </WorkspaceWrapper>
  );
};
