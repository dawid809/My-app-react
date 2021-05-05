import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Colors} from '../../../styledHelpers/Colors';

const InputWrapper = styled.div`
display: flex;
align-items:center;
width:33%;
position: relative;
`;

const CustomFilter = styled.input`
padding: 4px;
width: 100%;
border-color: ${Colors.lightGray};
border-radius: 4px;
text-align:center;
::placeholder {
  color: ${Colors.lightGray};
}
`;

const CustomImg = styled.img`
position: absolute;
right: 10px;
`;

export const Search : FC = () => {

    return (
    <InputWrapper>
        <CustomFilter type="text" placeholder="Search Legalcuster"/>
        <CustomImg src="icons/search.png" alt="Search" />
    </InputWrapper>
 );
};