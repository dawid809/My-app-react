import React, {FC} from 'react';
import styled from 'styled-components';

import {CustomImg} from '../../../styledHelpers/Components';

const LeftIconsWrapper = styled.div`
margin-left:20px;
width:100%;
display: flex;
justify-content: space-between;
cursor: pointer;
`;

const WraperHome = styled.div`
  display: flex;
  align-items:center;
`;

const HomeText = styled.h1`
font-size: 1.1rem;
float:right;
margin-left: 20px;
text-align:center;
`;

const CustomIcon = styled.img`
margin-left:50px;
width:80%;
`;

export const LeftIconsContent : FC = () => {

    return (
        <LeftIconsWrapper>
            <CustomImg src="logo192.png" style={{height: '30px',width: '30px'}}/>
            <WraperHome>
                <CustomImg src="icons/house2.png"/>
                <HomeText>Home</HomeText>
                <CustomIcon src="icons/arrow-down.png"/>
            </WraperHome> 
       </LeftIconsWrapper>
 );
};