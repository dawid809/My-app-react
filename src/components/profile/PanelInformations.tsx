import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const PanelInformationWrapper = styled.div`
  margin: 10px;
`;

const TitleText = styled.h1`
  font-weight: bold;
  font-size: 1.1em;
  padding: 5px 0;
  margin-bottom: 15px;
`;

const CustomText = styled.h3`
  margin: 10px 0;
`;

const GrayText = styled(CustomText)`
  color: ${Colors.darkerGray};
  font-size: 1.1em;
`;

const CustomAttachment = styled.input`
  padding: 5px;
  background: ${Colors.lazure};
  width: 99%;
  cursor: pointer;
`;

export const PanelInformations: FC = () => {
  return (
    <PanelInformationWrapper>
      <TitleText>Panel Informations</TitleText>

      <GrayText>Hourly fee</GrayText>
      <CustomText>610 PLN/Day(NoNegociated)</CustomText>
      <GrayText>Terms&Conditions </GrayText>
      <CustomText>Monthly 10$ reatiner - see with Jeennn </CustomText>
      <CustomAttachment type="file" />
    </PanelInformationWrapper>
  );
};
