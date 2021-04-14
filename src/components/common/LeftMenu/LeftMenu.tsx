import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../../styledHelpers/Colors';
import {Wrapper} from '../../../styledHelpers/Components';
import {CustomImg} from '../../../styledHelpers/Components';

const LeftWrapper = styled.div`
padding: 20px;
background: ${Colors.white};
max-width: 200px;
display: flex;
flex-direction: column;
`;

const ProfileWrapper = styled.div`
box-shadow: -1px 2px 10px -1px #9E9696;
padding:5px;
display: flex;
flex-direction:column;
`;

const AboutMe = styled.div`
border-top: 1px solid lightgray;
margin-top: 10px;
display:flex;
flex-direction:column;
`;

const General = styled.div`
display:flex;
flex-direction:column;
margin-left:5px;
`;

const SubtitleWrapper = styled.div`
margin: 10px;
display:flex;
position:relative;
`;

const NameText = styled.h2`
font-size: 1rem;
font-weight: 600;
color: ${Colors.blue};
text-align: center;
`;

const SubtitleText = styled.a`
font-size: 0.85rem;
font-weight:500;
margin: 5px;
align-self:center;
`;

const SmallText = styled.h4`
font-size: 0.8rem;
font-weight: 400;
color: ${Colors.gray};
text-align: center;
margin-top: 3px;
`;

const CustomImageWithBorder = styled.img`
border : 1px solid ${Colors.black};
padding: 2px 4px;
border-radius: 5px;
position:absolute;
right: 0px;
height:15px;
width:15px;
top:1px;
cursor: pointer;
`;

const CustomImage = styled.img`
margin-right: 5px;
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
                    <CustomImage src="icons/network.png"/>
                    <SubtitleText>Your network</SubtitleText>
                    <CustomImageWithBorder src="icons/user-plus.png"/>
               </SubtitleWrapper>
               <SubtitleWrapper>
                    <CustomImage src="icons/publications.png"/>
                    <SubtitleText>Your publications</SubtitleText>
                    <CustomImageWithBorder src="icons/plus.png"/>
               </SubtitleWrapper>
           </AboutMe>
        </ProfileWrapper>
        <General>
            <SubtitleWrapper>
                <CustomImage src="icons/publications.png"/>
                <SubtitleText>Publications</SubtitleText>
            </SubtitleWrapper>
            <SubtitleWrapper>
                <CustomImage src="icons/ecosystem.png"/>
                <SubtitleText>Ecosystem</SubtitleText>
            </SubtitleWrapper>
            <SubtitleWrapper>
                <CustomImage src="icons/entities2.png"/>
                <SubtitleText>Entities</SubtitleText>
            </SubtitleWrapper>
        </General>
    </LeftWrapper>
   
    );
};