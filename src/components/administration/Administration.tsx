import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { CustomImg } from '../../styledHelpers/Components';

const AdministrationWrapper = styled.div`
width: 100%;
min-height:1000px;
`;

const AdministrationContent = styled.div`
background:whitesmoke;
height: 400px;
margin: 0.5% 5%;
border: 1px solid ${Colors.gray};
`;

export const Administration: FC = () => {

  return (
    <AdministrationWrapper>
      <AdministrationContent>
         Administration
      </AdministrationContent>
    </AdministrationWrapper>
  );
};