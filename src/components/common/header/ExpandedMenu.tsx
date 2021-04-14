import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../../styledHelpers/Colors';
import {CustomImgWithMargin} from '../../../styledHelpers/Components';

const ExpandedWrapper = styled.div`
position: absolute;
display:flex;
flex-direction:column;
min-width: 250px;
background: white;
border: 1px solid ${Colors.gray};
z-index:5;
padding:10px;
margin:5px;
`;

const AccountWraper = styled.div`
margin-left:-10px;
margin-right:-10px;
border-bottom: 1px solid ${Colors.gray};
border-top: 1px solid ${Colors.gray};
`;

const ProfileWrapper = styled.div`
padding:5px;
display:flex;
flex-direction:column;
align-items:flex-start;
`;

const LogoutWrapper = styled.div`
display:flex;
align-self:center;
margin: 5px;
margin-top: 10px;
`;

const ImgAndTextContainer = styled.div`
display:flex;
margin: 5px;
`;

const ScrollWrapper = styled.div`
overflow-x: hidden;
height: 300px;
`;

const CustomPargraf = styled.p`
align-self:center;
`;

const CustomSubtitles = styled.h3`
color: ${Colors.gray};
margin: 5px;
`;

export const ExpandedMenu : FC = () => {
    return(
    <ExpandedWrapper>
        <ScrollWrapper>
            <input type="text" placeholder="Filter ..."/>

         <CustomSubtitles>Platfom</CustomSubtitles>

         <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/house.png" />
            <CustomPargraf> Home </CustomPargraf>
        </ImgAndTextContainer>

        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/publications.png" />
            <CustomPargraf>  Publications </CustomPargraf>
        </ImgAndTextContainer>

        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/people.png" />
            <CustomPargraf>People </CustomPargraf>
        </ImgAndTextContainer>

        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/entities2.png" />
            <CustomPargraf> Entities </CustomPargraf>
        </ImgAndTextContainer>

        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/administration.png" />
            <CustomPargraf> Administration</CustomPargraf>
        </ImgAndTextContainer>

        <CustomSubtitles>Workspaces</CustomSubtitles>

        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/house.png" />
            <CustomPargraf> Client contract </CustomPargraf>
        </ImgAndTextContainer>

        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/house.png" />
            <CustomPargraf> Supplier contract </CustomPargraf>
        </ImgAndTextContainer>

        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/entities.png" />
            <CustomPargraf> Corporate  </CustomPargraf>
        </ImgAndTextContainer>

        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/house.png" />
            <CustomPargraf> Group Norms </CustomPargraf>
        </ImgAndTextContainer>

        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/house.png" />
            <CustomPargraf> Real estate contracts </CustomPargraf>
        </ImgAndTextContainer>
    </ScrollWrapper>
    <AccountWraper>
        <CustomSubtitles>Account</CustomSubtitles>
        <ProfileWrapper>
            <CustomImgWithMargin src="icons/people.png" /> 
            Name 
            See profile
        </ProfileWrapper>
        <ImgAndTextContainer>
            <CustomImgWithMargin src="icons/privacy.png" />
            Privacy
        </ImgAndTextContainer>
        <ImgAndTextContainer>
        <CustomImgWithMargin src="icons/settings.png" />
        <CustomPargraf> Settings </CustomPargraf>
        </ImgAndTextContainer>
        
    </AccountWraper>
        <LogoutWrapper>
            <CustomImgWithMargin src="icons/logout.png" />
            <CustomPargraf>  Logout </CustomPargraf>
        </LogoutWrapper>
        
    </ExpandedWrapper>
    )
};
    