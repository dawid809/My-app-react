import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';

const HomeWrapper = styled.div`
background: ${Colors.white};
width: 100%;
min-height:1000px;
`;

const HomeContent = styled.div`
background:whitesmoke;
height: 400px;
margin: 0.5% 5%;
border: 1px solid ${Colors.gray};
`;

export const Home: FC = () => {

  return (
    <HomeWrapper>
       <HomeContent>
             Home
      </HomeContent>
    </HomeWrapper>
  );
};