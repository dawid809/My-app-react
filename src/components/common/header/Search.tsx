import React, {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../../styledHelpers/Colors';

const InputText = styled.input`
margin-right:-30px;
width:100%;
min-height: 25px;
border: 1px solid ${Colors.gray};
text-align:center;
`;

const InputWrapper = styled.div`
display: flex;
align-items:center;
margin: 10px;
width:35%;
`;


export const Search : FC = () => {

    return (
    <InputWrapper>
        <InputText type="text" placeholder="Search Legalcuster" />
        <img src="icons/search.png" alt="Search" />
    </InputWrapper>
 );
};