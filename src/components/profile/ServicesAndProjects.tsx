import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

const ServicesAndProjectsWrapper = styled.div`
  margin: 10px;
`;

const TitleText = styled.h1`
  font-weight: bold;
  font-size: 1.1em;
  padding: 5px 0;
  margin-bottom: 15px;
`;

export const ServicesAndProjects: FC = () => {
  return (
    <ServicesAndProjectsWrapper>
      <TitleText>Services&Projects </TitleText>
      <h1>Corporate M&A and international acquisitions </h1>
    </ServicesAndProjectsWrapper>
  );
};
