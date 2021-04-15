import React, {FC, useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {Colors} from '../../../styledHelpers/Colors';
import {CustomImg} from '../../../styledHelpers/Components';
import {CustomImageWithBorder} from '../../../styledHelpers/Components';
import { getUsers } from '../../../actions/usersActions';

type GetUsers = ReturnType<typeof getUsers>


const ProfileWrapper = styled.div`
box-shadow: -1px 2px 10px -1px #9E9696;
padding:5px;
display: flex;
flex-direction:column;
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

const SubtitleWrapper = styled.div`
margin: 10px;
display:flex;
position:relative;
`;

const AboutMe = styled.div`
border-top: 1px solid lightgray;
margin-top: 10px;
display:flex;
flex-direction:column;
`;



export const Profile : FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(getUsers())
    }, []);

    return (
        <ProfileWrapper>
            <CustomImg src="logo192.png" alt="User photo" />
            <NameText>Name Surname</NameText>
            <SmallText>Job title - comapny</SmallText>
            <AboutMe>
                <SubtitleWrapper>
                    <CustomImg src="icons/network.png" alt="Network" />
                    <SubtitleText>Your network</SubtitleText>
                    <CustomImageWithBorder src="icons/user-plus.png" alt="Add user" />
                </SubtitleWrapper>
                <SubtitleWrapper>
                    <CustomImg src="icons/publications.png" alt="Publications" />
                     <SubtitleText>Your publications</SubtitleText>
                    <CustomImageWithBorder src="icons/plus.png" alt="Icons" />
                </SubtitleWrapper>
            </AboutMe>
        </ProfileWrapper>
 );
};