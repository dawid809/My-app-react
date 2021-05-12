import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { Workspaces } from "../publications/Workspaces";
import { LatestPublications } from "../publications/LatestPublications";
import { ResumeWork } from "../publications/ResumeWork";

const ContentContext = styled.div`
 width: 100%;
  min-height: 1000px;
`;

export const Publications: FC = () => {
  return (
    <ContentContext>
      <LatestPublications />
      <Workspaces />
      <ResumeWork />
    </ContentContext>
  );
};
