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
  font-size: 15px;
   line-height: 1.3;
`;

const GrayText = styled(CustomText)`
  color: ${Colors.darkerGray};
  font-size: 1.1em;
`;

const AttachmentWrapper = styled.div`
display: flex;
align-items: center;
background: ${Colors.lazure};
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

const CustomImg = styled.img`
  width: 14px;
  height: 14px;
  align-self: center;
  margin: 0 10px;
  cursor: pointer;
`;

const ServicesAndProjectsWrapper = styled.div`
  margin: 10px 0;
`;

const EditButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: none;
`;

const EditWrapper = styled.div`
  width: 22px;
  height: 22px;

  right: 15px;
  top: 15px;
  display: flex;
`;

const EditIcon = styled.img`
  width: 18px;
  height: 18px;
  align-self: center;
  display: flex;
`;

export const PanelInformations: FC = () => {

  const [formikPanelInformationsEnabled, setformikPanelInformationsEnabled] = useState(true);

  const editPanelInformationsHandle = () => {
    const disable = formikPanelInformationsEnabled;
    setformikPanelInformationsEnabled(!disable);
  };
  

  const formik = useFormik({
    initialValues: {
      hourly: '310 PLN/Day (No Negociated!)a',
      monthly: 'Monthly 10$ reatiner - see with Jeennna',
      servicesAndProjects: 'Corporate M&A and international acquisitions '
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [attachmentValue, setAttachmentValue] = useState('')

  return (
    <form onSubmit={formik.handleSubmit}>
    <PanelInformationWrapper>
      <EditWrapper>
            <EditButton onClick={editPanelInformationsHandle} type="submit">
              <EditIcon src="icons/pen.png" />
            </EditButton>
          </EditWrapper>
      <TitleText>Panel Informations</TitleText>

      <GrayText>Hourly fee</GrayText>
      {formikPanelInformationsEnabled ? (
      <CustomText>{formik.values.hourly}</CustomText>
      ) : (
        <CustomInput style={{marginBottom: '10px', width: '50%'}}
        name="hourly"
        value={formik.values.hourly}
        onChange={formik.handleChange}
      />
      )}
      <GrayText>Terms & conditions </GrayText>
      {formikPanelInformationsEnabled ? (
         <CustomText>{formik.values.monthly}</CustomText>
      ) : (
        <CustomInput style={{marginBottom: '10px', width: '50%'}}
        name="monthly"
        value={formik.values.monthly}
        onChange={formik.handleChange}
      />
      )}
         {formikPanelInformationsEnabled ? (
           <AttachmentWrapper>
                <CustomImg src="icons/request.png" alt="zapytanie" />
               <CustomText>Attachment name: {attachmentValue}</CustomText>
               </AttachmentWrapper>
               ) : (
      <CustomAttachment onChange={event => setAttachmentValue(event.target.files[0].name)} />
      )}
         {formikPanelInformationsEnabled ? (
        <ServicesAndProjectsWrapper>
      <TitleText>Services&Projects </TitleText>
      <CustomText>{formik.values.servicesAndProjects}</CustomText>
    </ServicesAndProjectsWrapper>
       ) : (
        <ServicesAndProjectsWrapper>
      <TitleText>Services&Projects </TitleText>
      <CustomInput style={{marginBottom: '10px', width: '50%'}}
        name="servicesAndProjects"
        value={formik.values.servicesAndProjects}
        onChange={formik.handleChange}
      />
    </ServicesAndProjectsWrapper>
        )}
    </PanelInformationWrapper>
    </form>
  );
};
