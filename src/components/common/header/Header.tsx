import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Colors } from '../../../styledHelpers/Colors';
import { ExpandedMenu } from '../header/ExpandedMenu'
import { Search } from '../header/Search';
import { RightIcons } from '../header/RightIcons'
import { LeftIconsContent } from '../header/LeftIcons'

const InnerWrapper = styled.div`
background: ${Colors.white};
display: flex;
justify-content: space-between;
align-items:center;
height:30px;
padding: 10px;
box-shadow: 0 5px 5px ${Colors.lightGray};
margin-bottom: 5px;
`;

const LeftIcons = styled.div`
margin-left:20px;
width:100%;
display: flex;
justify-content: space-between;
`;

export const Header: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

  const menuHandler = () => {
    console.log('click')
    toggleDropdown();
  };

  return (

    <InnerWrapper>
      <div ref={wrapperRef}>
        <LeftIcons onClick={menuHandler}>
          <LeftIconsContent></LeftIconsContent>
        </LeftIcons>
        {dropdownOpen &&
          <ExpandedMenu />
        }
      </div>
      <Search></Search>
      <RightIcons></RightIcons>
    </InnerWrapper>
  );
};
