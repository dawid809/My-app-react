import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';


const WorkspacesWrapper = styled.div`
background:whitesmoke;
height: 150px;
margin: 0.5% 5%;
border: 1px solid ${Colors.gray};
`;

export const Workspaces: FC = () => {

    return (
        <WorkspacesWrapper>
           Workspaces
        </WorkspacesWrapper>
    );
  };