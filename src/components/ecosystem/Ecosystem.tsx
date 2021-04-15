import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';

const ContentContext = styled.div`
background: ${Colors.white};
width: 1000px;
min-height:1000px;
`;

const EcosystemWrapper = styled.div`
background:whitesmoke;
height: 400px;
margin:5%;
border: 1px solid ${Colors.gray};
`;

export const Ecosystem: FC = () => {

  return (
    <ContentContext>
      <EcosystemWrapper>
        Ecosystem
      </EcosystemWrapper>
    </ContentContext>
  );
};