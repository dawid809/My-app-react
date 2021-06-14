import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';

import "../entities/index.css";

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

interface IMosaicDropdownProps {
  toggleMosaicClass: any;
  toggleListClass: any; 
}


export const MosaicDropdown: FC<IMosaicDropdownProps> = (props) => {
  // const {setMosaic, mosaic} = props;
  
  // const [displayType, setDisplayType] = useState({ display: "mosaicType" });

  // const setEntitiesToList = () => {
  //   setDisplayType({ display: "listType" });
  // };
  // const setEntitiesToMosaic = () => {
  //   setDisplayType({ display: "mosaicType" });
  const [isMosaicActive, setMosaicActive] = useState(false);

  

    return (
        <MosaicWrapper>
            <h2 onClick={props.toggleMosaicClass}>Mosaic</h2>
            <h2 onClick={props.toggleListClass}>List</h2>
            <h3>asds</h3>
            <h3>asds</h3>
            <h3>asds</h3>
        </MosaicWrapper>
    );
};