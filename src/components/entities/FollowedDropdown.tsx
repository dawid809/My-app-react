import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';

const MosaicWrapper = styled.div`
position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.white};
  border: ${Colors.border};
  border-radius: 4px;
  top: 35px;
  overflow: hidden;
  z-index:100;

h2 {
    text-align: center;
    align-self: center;
    width: 100%;
    cursor: pointer;
    padding: 8px;
  }

  h2:hover {
    background-color: ${Colors.lightBlue};
    color: ${Colors.whiteSmoke};
  }
`;

export const FollowedDropdown: FC = () => {
    return (
        <MosaicWrapper>
            <h2>All</h2>
            <h2>Mine</h2>
        </MosaicWrapper>
    );
};