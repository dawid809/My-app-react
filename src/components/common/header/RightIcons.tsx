import React, {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../../styledHelpers/Colors';

import {CustomImg} from '../../../styledHelpers/Components';

const RightIconsWrapper = styled.div`
margin-right:20px;
width: 100px;
display: flex;
justify-content: space-between;
`;


const RoundedWrapperForImage = styled.div`
border-radius: 50%;
background: ${Colors.lightGray};
height:25px;
width: 25px;
display:flex;
align-items: center;
justify-content:center;
`;

const CustomIconInsideWrapper = styled.img`
width: 60%;
height: 60%;
`;

export const RightIcons : FC = () => {

    return (
        <RightIconsWrapper>
            <CustomImg src="icons/house.png" />
            <RoundedWrapperForImage>
                <CustomIconInsideWrapper src="icons/comments.png" alt="Comments" />
            </RoundedWrapperForImage>
            <RoundedWrapperForImage>
                <CustomIconInsideWrapper src="icons/bell.png" alt="Bell" />
            </RoundedWrapperForImage>
        </RightIconsWrapper>
 );
};