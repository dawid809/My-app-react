import React, { FC } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";

import { Colors } from "../../../styledHelpers/Colors";
import { StyledLink } from "../../../styledHelpers/Components";
import { ExpandedMenu } from "../header/ExpandedMenu";
import { Search } from "../header/Search";
import { RightIcons } from "../header/RightIcons";
import { LeftIconsContent } from "../header/LeftIcons";

const InnerWrapper = styled.div`
  background: ${Colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 10px;
  box-shadow: 0 3px 3px ${Colors.lightGray};
  margin-bottom: 10px;
`;

const LeftIcons = styled.div`
  width: 100%;
  display: flex;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Header: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const menuHandler = () => {
    toggleDropdown();
  };

  return (
    <InnerWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <StyledLink to="/">
          <Logo src="icons/logo.png" alt="logo" />
        </StyledLink>
        <div ref={wrapperRef} style={{position: "relative"}}>
          <LeftIcons onClick={menuHandler}>
            <LeftIconsContent />
          </LeftIcons>
          {dropdownOpen && <ExpandedMenu />}
        </div>
      </div>
      <Search />
      <RightIcons />
    </InnerWrapper>
  );
};
