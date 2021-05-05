import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';


const PublicationsWrapper = styled.div`
display: flex;
background:whitesmoke;
height: 250px;
margin: 0.5% 5%;
border: 1px solid ${Colors.gray};
`;

const BigPhoto = styled.img`
height: 100%;
width: 30%;
background:red;
`;

const LatestPublicationsWrapper = styled.div`
background: cadetblue;
width: 70%;
`;

export const LatestPublications: FC = () => {

    return (
        <PublicationsWrapper>
          <BigPhoto/>
          <LatestPublicationsWrapper>
          Latest publications
          </LatestPublicationsWrapper>
        </PublicationsWrapper>
    );
  };