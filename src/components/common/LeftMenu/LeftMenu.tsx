import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../../styledHelpers/Colors';
import {CustomImgWithMargin} from '../../../styledHelpers/Components';
import {Profile} from '../LeftMenu/Profile';

const LeftWrapper = styled.div`
padding: 20px;
background: ${Colors.white};
max-width: 200px;
display: flex;
flex-direction: column;
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

const SubtitleText = styled.a`
font-size: 0.85rem;
font-weight:500;
margin: 5px;
align-self:center;
`;


export const LeftMenu : FC = () => {
return(

   
    <LeftWrapper>
        <Profile/> 
        <General>
            <SubtitleWrapper>
                <CustomImgWithMargin src="icons/publications.png"alt="Publications" />
                <SubtitleText>Publications</SubtitleText>
            </SubtitleWrapper>
            <SubtitleWrapper>
                <CustomImgWithMargin src="icons/ecosystem.png" alt="Ecosystem" />
                <SubtitleText>Ecosystem</SubtitleText>
            </SubtitleWrapper>
            <SubtitleWrapper>
                <CustomImgWithMargin src="icons/entities2.png" alt="Entities" />
                <SubtitleText>Entities</SubtitleText>
            </SubtitleWrapper>
        </General>
    </LeftWrapper>
   
    );
};