import React, { FC, useState } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
    /* flex-direction: row;
justify-content: space-evenly; */
  }

  li {
    margin: 5px;
    padding: 5px 10px;
    border: ${Colors.border};
    border-radius: 4px;

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

  const TileData = [
    { title: "All", color: "#EECEFE", icon: "" },
    { title: "SAS", color: "#00FF6D", icon: "faCoffee" },
    { title: "SARL", color: "#BFF7F1", icon: "faCoffee" },
    { title: "Secondary business", color: "#F5D305", icon: "faCoffee" },
    { title: "Communities", color: "#BABABA", icon: "faCoffee" },
    { title: "POA", color: "#DADDDB", icon: "faCoffee" },
    { title: "Survey", color: "whitesmoke" },
    { title: "...", color: "white", icon: "" },
  ];

  const name = props.name;
  const imgUrl = props.src;

  return (
    <WorkspaceWrapper>
      <WorkspaceContent>
        <div>
          <TopBarWrapper>
            <div style={{ position: "relative" }}>
              <img
                src="../icons/table.png"
                alt="photo"
                style={{ width: "100%", height: "120px", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "15px", marginBottom: "20px" }}>
              <div style={{ float: "left", marginRight: "20px" }}>
                <img
                  src={linkSmart(imgUrl)}
                  alt="icon"
                  style={{ width: "55px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "-5px",
                }}
              >
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
            </div>
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
            {TileData.map((value) => (
              <li key={value.title} style={{ backgroundColor: value.color }}>
                <span>
                  <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                </span>
                {value.title}
              </li>
            ))}
          </ul>
        </TileList>

        <Pagination searchValue={searchValue} isFollowed={isFollowed} />
      </WorkspaceContent>
    </WorkspaceWrapper>
  );
};
