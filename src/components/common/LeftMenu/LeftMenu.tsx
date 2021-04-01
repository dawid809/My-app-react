import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../../styledHelpers/Colors';
import {Wrapper} from '../../../styledHelpers/Components';

const LeftWrapper = styled.div`
padding: 20px;
background: ${Colors.white};
max-width: 200px;
display: flex;
flex-direction: column;
`;

const ProfileWrapper = styled.div`
margin-left: auto;
margin-right: auto;
margin-bottom:30px;
box-shadow: -1px 2px 10px -1px #9E9696;
padding:5px;
`;

const AboutMe = styled.div`
border-top: 1px solid lightgray;
margin-top: 5px;
`;

const General = styled.div`
margin-left: auto;
margin-right: auto;
`;

const SubtitleWrapper = styled.div`
margin: 12px;
`;

const NameText = styled.h2`
font-size: 1rem;
font-weight: 600;
color: ${Colors.blue};
text-align: center;
`;

const SubtitleText = styled.a`
 font-size: 1rem;
 font-weight:600;
 padding:10px;
 margin:5px;
`;

const SmallText = styled.h4`
font-size: 0.8rem;
font-weight: 400;
color: ${Colors.gray};
text-align: center;
margin-top: 3px;
`;

export const LeftMenu : FC = () => {
return(

   
    <LeftWrapper>
        <ProfileWrapper>
            <img src="logo192.png"></img>
            <NameText>Name Surname</NameText>
            <SmallText>Job title - comapny</SmallText>
           <AboutMe>
                <SubtitleWrapper>
                    <img src="icons/network.png"/>
                    <SubtitleText>Your network</SubtitleText>
                    <img src="icons/user-plus.png"/>
               </SubtitleWrapper>
               <SubtitleWrapper>
                    <img src="icons/publications.png"/>
                    <SubtitleText>Your publications</SubtitleText>
                    <img src="icons/plus.png"/>
               </SubtitleWrapper>
           </AboutMe>
        </ProfileWrapper>
        <General>
            <SubtitleWrapper>
                <img src="icons/publications.png"/>
                <SubtitleText>Publications</SubtitleText>
            </SubtitleWrapper>
            <SubtitleWrapper>
                <img src="icons/ecosystem.png"/>
                <SubtitleText>Ecosystem</SubtitleText>
            </SubtitleWrapper>
            <SubtitleWrapper>
                <img src="icons/entities.png"/>
                <SubtitleText>Entities</SubtitleText>
            </SubtitleWrapper>
        </General>
    </LeftWrapper>
   
    );
};