import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';


const LatestPublicationsWrapper = styled.div`
background:whitesmoke;
height: 250px;
margin: 0.5% 5%;
border: 1px solid ${Colors.gray};
`;

export const LatestPublications: FC = () => {

    return (
        <LatestPublicationsWrapper>
          Publications
        </LatestPublicationsWrapper>
    );
  };