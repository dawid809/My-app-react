import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { CustomImg } from '../../styledHelpers/Components';

const EntitiesWrapper = styled.div`
background: ${Colors.white};
width: 1000px;
min-height:1000px;
`;

const EntitiesContent = styled.div`
background:whitesmoke;
height: 400px;
margin:5%;
border: 1px solid ${Colors.gray};
`;

export const Entities: FC = () => {

  return (
    <EntitiesWrapper>
      <EntitiesContent>
        Entities
        <CustomImg src="icons/cog.png"/>
      </EntitiesContent>
    </EntitiesWrapper>
  );
};