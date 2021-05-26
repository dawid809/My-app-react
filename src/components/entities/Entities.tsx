import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { TopBar } from "../entities/TopBar";
import { FunctionallIIconsComponent } from "../entities/FunctionallIIconsComponent";

const EntitiesWrapper = styled.div`
  width: 100%;
  min-height: 1000px;
`;

const EntitiesContent = styled.div`
  background: ${Colors.whiteSmoke};
  height: 400px;
  margin: 1% 5%;
  /* border: 1px solid ${Colors.gray}; */
`;

const CompanyWrapper = styled.div`
  display: flex;
  margin: 10px 20px;
`;

const SingleComapny = styled.div`
  border: 1px solid ${Colors.lightGray};
  border-radius: 4px;
  width: 20%;
  height: 100px;
  margin-right: 5px;
`;

export const Entities: FC = () => {
  return (
    <EntitiesWrapper>
      <EntitiesContent>
        <TopBar />
        <FunctionallIIconsComponent />

        <CompanyWrapper>
          <SingleComapny />
          <SingleComapny />
        </CompanyWrapper>
      </EntitiesContent>
    </EntitiesWrapper>
  );
};
