import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { useFormik } from "formik";

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

const CustomAttachment = styled.input.attrs({
    type: "file"
})`
  padding: 5px;
  background: ${Colors.lazure};
  width: 99%;
  cursor: pointer;
`;

const CustomInput = styled.input.attrs({
  type: "text",
})`
  font-size: 15px;
  line-height: 1.3;
  display: flex;
  flex-direction: row;
  margin: 1px;
  border: none;
  border-bottom: 1px solid ${Colors.gray};
  &:focus {
    background: #f3eaea;
    outline: none;
  }
  &:hover {
    transform: 1.2;
    background: #e4d0d0;
    outline: none;
  }
`;

export const PanelInformations: FC = () => {

  const [formikDatasEnabled, setFormikDatasEnabled] = useState(false);
  const [formikOptionsEnabled, setFormikOptionsEnabled] = useState(false);

  const editUserDatasHandle = () => {
    const disable = formikDatasEnabled;
    setFormikDatasEnabled(!disable);
  };
  const editOptionsHandle = () => {
    const disable = formikOptionsEnabled;
    setFormikOptionsEnabled(!disable);
  };

  const formik = useFormik({
    initialValues: {
      hourly: '310 PLN/Day (No Negociated!)',
      monthly: 'Monthly 10$ reatiner - see with Jeennn'
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("t");
    },
  });

  const formikOptions = useFormik({
    initialValues: {
      expertise: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("t");
    },
  });

  return (
    <PanelInformationWrapper>
      <TitleText>Panel Informations</TitleText>

      <GrayText>Hourly fee</GrayText>
      <CustomText>{formik.values.hourly}</CustomText>
      {/* {formikDatasEnabled ? (
      <CustomText>{formik.values.hourly}</CustomText>
      ) : (
        <CustomInput
        name="hourly"
        value={formik.values.hourly}
        onChange={formik.handleChange}
      />
      )} */}
      <GrayText>Terms & conditions </GrayText>
      <CustomText>Monthly 10$ reatiner - see with Jeennn </CustomText>
      {/* {formikDatasEnabled ? (
      <CustomText>Monthly 10$ reatiner - see with Jeennn </CustomText>
      ) : (
        <CustomInput
        name="monthly"
        value={formik.values.monthly}
        onChange={formik.handleChange}
      />
      )} */}
      <CustomAttachment />
    </PanelInformationWrapper>
  );
};
