import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';


const ResumeWorkWrapper = styled.div`
background:whitesmoke;
height: 400px;
margin: 0.5% 5%;
border: 1px solid ${Colors.gray};
`;

export const ResumeWork: FC = () => {

    return (
        <ResumeWorkWrapper>
           Resume your work
        </ResumeWorkWrapper>
    );
  };