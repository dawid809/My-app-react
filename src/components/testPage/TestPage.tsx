import React, { Component } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

const ContentContext = styled.div`
  width: 100%;
  min-height: 1000px;
`;

const TestPageWrapper = styled.div`
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

export default class TestPage extends Component {
  render() {
    return (
      <ContentContext>
        <TestPageWrapper>
          <TestPageText>Strona testowa</TestPageText>
          <TestIcon src="icons/repair.png" alt="repair tools" />
        </TestPageWrapper>
      </ContentContext>
    );
  }
}
