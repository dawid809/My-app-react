import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

const TitleText = styled.h2`
  font-size: ${fontSize[20]};
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 20px;
  margin-bottom: 12px;
  align-items: center;
`;

const CustomIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 10px;
`;

const BlueIcon = styled(CustomIcon)`
  filter: invert(16%) sepia(62%) saturate(3838%) hue-rotate(237deg)
    brightness(78%) contrast(106%);
`;

const LeftIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
 align-items: center;
 justify-content: center;

`;

const MosaicWrapper = styled.div`
display: flex;
background-color: #bde1f6;
 height:100%;
 padding: 5px 5px 5px 1px;
 border-radius: 4px;
`;

const RightIconWrapper =  styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
border: 1px solid ${Colors.lightGray};
border-radius: 4px;
border-left:none;
`;

const BlueText = styled.h4`
color: ${Colors.blue};
`;

export const TopBar: FC = () => {
  return (
    <HeaderWrapper>
      <LeftIconWrapper>
        <TitleText>Entities</TitleText>
        <CustomIcon src="icons/cog.png" alt="Cog icon" />
      </LeftIconWrapper>

      <RightIconWrapper>
    
        <MosaicWrapper>
          <BlueIcon src="icons/mosaic.png" alt="Mosaic icon" style={{color: "blue"}}/>
          <BlueText> Mosaic </BlueText>
        </MosaicWrapper>
        <CustomIcon src="icons/menu.png" alt="Menu icon" />
    
      </RightIconWrapper>  
    </HeaderWrapper>
  );
};
