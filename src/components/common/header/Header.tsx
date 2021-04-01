import React, {FC} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import {Wrapper} from '../../../styledHelpers/Components';
import {Colors} from '../../../styledHelpers/Colors';
import {ExpandedMenu} from '../header/ExpandedMenu'

const InnerWrapper = styled.div`
background: ${Colors.white};
display: flex;
justify-content: space-between;
align-items:center;
height:30px;
padding: 10px;
box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
margin-bottom: 5px;
`;

const LeftIcons = styled.div`
margin-left:20px;
display: flex;
justify-content: space-between;
`;

const RightIcons = styled.div`
margin-right:20px;

display: flex;
justify-content: space-between;
`;

const InputWrapper = styled.div`
 display: flex;
align-items:center;
margin: 10px;
width:35%;
`;

const WraperHome = styled.div`
  display: flex;
  align-items:center;
`;

//const ExpandedMenu = styled.div``;

const HomeText = styled.h1`
font-size: 1rem;
float:right;
margin-left: 20px;
text-align:center;
`;

const InputText = styled.input`
margin-right:-30px;
width:100%;
min-height: 25px;
`;

const CustomIcon = styled.img`
margin-left:50px;
`;


export const Header : FC = () => { 
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

  const menuHandler = () => {
    console.log('click')
    toggleDropdown();
  };

      return(
       
          <InnerWrapper>
            <div ref={wrapperRef}>
            <LeftIcons onClick={menuHandler}>
              <img src="logo192.png" style={{height: '30px',width: '30px'}}/>
           <WraperHome>
              <img src="icons/house2.png"/>
              <HomeText>Home</HomeText>
              <CustomIcon src="icons/arrow-down.png"/>
          </WraperHome>  
            </LeftIcons>
            {dropdownOpen &&
                <ExpandedMenu />
                }
            </div>
           

         <InputWrapper>
            <InputText type="text" placeholder="Search Legalcuster" />
            <img src="icons/search.png" />
         </InputWrapper>
          <RightIcons>
            <img src="icons/house.png" />
            <img src="icons/comments.png" />
            <img src="icons/bell.png" />
          </RightIcons>
          </InnerWrapper>
        
      );
};
