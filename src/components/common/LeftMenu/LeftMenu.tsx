import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../../styledHelpers/Colors';
import {CustomImgWithMargin} from '../../../styledHelpers/Components';
import {Profile} from '../LeftMenu/Profile';
import  {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {StyledLink} from '../../../styledHelpers/Components'

const LeftWrapper = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
height: auto;
width: 225px;
`;

const General = styled.div`
display:flex;
flex-direction:column;
margin-left:5px;
`;

const SubtitleWrapper = styled.div`
margin: 10px;
display:flex;
align-items:center;
`;

const SubtitleText = styled.a`
font-size: 0.85rem;
font-weight:500;
margin: 5px;
`;


export const LeftMenu : FC = () => {
return(
    <LeftWrapper>
        <Profile/> 
        <General>
            <SubtitleWrapper>
                <CustomImgWithMargin src="icons/publications.png"alt="Publications" />
                <StyledLink to="/publications">
                    <SubtitleText>Publications</SubtitleText>
                </StyledLink>
            </SubtitleWrapper>
       
            <SubtitleWrapper>
                <CustomImgWithMargin src="icons/ecosystem.png" alt="Ecosystem" />
                <StyledLink to="/ecosystem">
                <SubtitleText>Ecosystem</SubtitleText>
                </StyledLink>
            </SubtitleWrapper>

            <SubtitleWrapper>
                <CustomImgWithMargin src="icons/entities2.png" alt="Entities" />
                <StyledLink to="/entities">
                <SubtitleText>Entities</SubtitleText>
                </StyledLink>
            </SubtitleWrapper>
        </General>
    </LeftWrapper>
   
    );
};