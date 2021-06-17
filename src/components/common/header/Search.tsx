import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { linkSmart } from "../smartLink/SmartLink";

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
  outline: none;
  text-align: center;
  :focus {
    border-color: ${Colors.black};
  }
  ::placeholder {
    color: ${Colors.gray};
  }
  &:hover {
    background: ${Colors.whiteSmoke};
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
      <CustomImg src={linkSmart("icons/search.png")} alt="Search" />
    </InputWrapper>
  );
};
