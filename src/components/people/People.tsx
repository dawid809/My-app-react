import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { linkSmart } from "../common/smartLink/SmartLink";

const ContentContext = styled.div`
  width: 100%;
  min-height: 1000px;
`;

const PeopleWrapper = styled.div`
  background: ${Colors.whiteSmoke};
  height: 400px;
  margin: 0.5% 5%;
  border: 1px solid ${Colors.gray};
  display: flex;
  flex-direction: column;
`;

const TestPageText = styled.h1`
  font-size: ${fontSize[24]};
  text-align: center;
  margin-top: 20px;
`;

const TestIcon = styled.img`
  width: 200px;
  height: 200px;
  align-self: center;
  margin-top: 50px;
`;

export const People: FC = () => {
  return (
    <ContentContext>
      <PeopleWrapper>
        <TestPageText>People test page</TestPageText>
        <TestIcon src={linkSmart("icons/repair.png")} alt="repair tools" />
      </PeopleWrapper>
    </ContentContext>
  );
};
