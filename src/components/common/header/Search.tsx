import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  position: relative;
`;

const CustomFilter = styled.input`
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${Colors.lightGray};
  text-align: center;
  ::placeholder {
    color: ${Colors.lightGray};
  }
`;

const CustomImg = styled.img`
  position: absolute;
  right: 10px;
`;

export const Search: FC = () => {
  return (
    <InputWrapper>
      <CustomFilter type="text" placeholder="Search Legalcuster" />
      <CustomImg src="icons/search.png" alt="Search" />
    </InputWrapper>
  );
};
