import React, { FC, useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { Select, Descriptions } from "antd";
import { Colors } from "../../styledHelpers/Colors";
import { PanelInformations } from "./PanelInformations";
import { InternalCorrespondants } from "./InternalCorrespondants";
import { Proposals } from "./table/Proposals";
import { InternalReviews } from "./table/InternalReviews";
import { AmountOfFees } from "./table/AmountOfFees";
import { fontSize } from "../../styledHelpers/FontSizes";

// Some style are globally
import "antd/dist/antd.css";

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditIcon = styled.img`
  width: 18px;
  height: 18px;
  align-self: center;
  display: flex;
`;

const UserExperienceWrapper = styled.div`
  border-bottom: 1px solid ${Colors.lightGray};
  padding: 10px;
  position: relative;
`;

const TextWithBackground = styled.h3`
  background: ${Colors.lightBlueBackground};
  color: ${Colors.lightBlue};
  padding: 10px 10px;
  border-radius: 5px;
  margin-left: 8px;
  margin-bottom: 8px;
  display: table;
  display: inline-block;
  font-size: ${fontSize[14]};
`;

const GrayText = styled.h3`
  color: ${Colors.darkerGray};
  margin: 10px 5px;
  font-size: 1.1em;
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
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
`;
export const RestUserInfo: FC = () => {
  const expertise: string[] = [
    "Cybersecurity",
    "Cloud computing",
    "Project management",
    "Software development",
    "Networking and wireless",
    "Mergers",
  ];

  const specialities: string[] = [
    "Computer programmer",
    "Quality assurance tester ",
    "Web developer",
    "IT technician",
    "Systems analyst",
    "Network engineer",
    "Database administrator",
    "Computer scientist",
    "Software engineer",
  ];

  const admission: string[] = [
    "Paris bar association",
    "Tunisian bar association",
    "Warsaw bar association",
    "Prague bar association",
    "Lions bar association",
  ];

  const countries: string[] = [
    "Poland",
    "Germany",
    "China",
    "Ireland",
    "Japan",
    "Greece",
    "Russia",
    "Italy",
    "The USA",
    "Sweden",
  ];

  const [formikSelectOptionsEnabled, setFormikSelectOptionsEnabled] =
    useState<boolean>(false);

  const editSelectOptionHandle = () => {
    const disable = formikSelectOptionsEnabled;
    setFormikSelectOptionsEnabled(!disable);
  };

  const [formikPanelInformationsEnabled, setformikPanelInformationsEnabled] =
    useState(true);

  const editPanelInformationsHandle = () => {
    const disable = formikPanelInformationsEnabled;
    setformikPanelInformationsEnabled(!disable);
  };

  const formikSelectOption = useFormik({
    initialValues: {
      expertise: ["Cybersecurity"],
      specialities: ["Computer programmer"],
      admission: ["Paris bar association"],
      countries: ["Poland"],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const Option = Select;

  return (
    <UserWrapper>
      <form onSubmit={formikSelectOption.handleSubmit}>
        <UserExperienceWrapper>
          <EditWrapper>
            <EditButton
              onClick={() => {
                editSelectOptionHandle();
                editPanelInformationsHandle();
              }}
              type="submit"
            >
              <EditIcon src="icons/pen.png" />
            </EditButton>
          </EditWrapper>

          <GrayText>Expertise</GrayText>
          {formikSelectOptionsEnabled ? (
            <Descriptions.Item label="Expertise">
              <Select
                id="expertise"
                size="small"
                mode="multiple"
                showArrow
                defaultActiveFirstOption
                value={formikSelectOption.values.expertise}
                onChange={(values) => {
                  formikSelectOption.setFieldValue("expertise", values);
                }}
              >
                {expertise.map((item: string) => (
                  <Option key={item} value={item}>
                    <TextWithBackground style={{ padding: "0" }}>
                      {item}
                    </TextWithBackground>
                  </Option>
                ))}
              </Select>
            </Descriptions.Item>
          ) : (
            <div>
              {formikSelectOption.values.expertise.map((item) => (
                <TextWithBackground key={item}>{item}</TextWithBackground>
              ))}
            </div>
          )}
          <GrayText>Specialities</GrayText>
          {formikSelectOptionsEnabled ? (
            <Descriptions.Item label="Specialities">
              <Select
                id="specialities"
                size="small"
                mode="multiple"
                showArrow
                defaultActiveFirstOption
                value={formikSelectOption.values.specialities}
                onChange={(values) => {
                  formikSelectOption.setFieldValue("specialities", values);
                }}
              >
                {specialities.map((item: string) => (
                  <Option key={item} value={item}>
                    <TextWithBackground style={{ padding: "0" }}>
                      {item}
                    </TextWithBackground>
                  </Option>
                ))}
              </Select>
            </Descriptions.Item>
          ) : (
            <div>
              {formikSelectOption.values.specialities.map((item: string) => (
                <TextWithBackground key={item}>{item}</TextWithBackground>
              ))}
            </div>
          )}
          <GrayText>Admission to practice law</GrayText>
          {formikSelectOptionsEnabled ? (
            <Descriptions.Item label="Admission">
              <Select
                id="admission"
                size="small"
                mode="multiple"
                showArrow
                defaultActiveFirstOption
                value={formikSelectOption.values.admission}
                onChange={(values) => {
                  formikSelectOption.setFieldValue("admission", values);
                }}
              >
                {admission.map((item: string) => (
                  <Option key={item} value={item}>
                    <TextWithBackground style={{ padding: "0" }}>
                      {item}
                    </TextWithBackground>
                  </Option>
                ))}
              </Select>
            </Descriptions.Item>
          ) : (
            <div>
              {formikSelectOption.values.admission.map((item: string) => (
                <TextWithBackground key={item}>{item}</TextWithBackground>
              ))}
            </div>
          )}
          <GrayText>Countries</GrayText>
          {formikSelectOptionsEnabled ? (
            <Descriptions.Item label="Specialities">
              <Select
                id="specialities"
                size="small"
                mode="multiple"
                showArrow
                defaultActiveFirstOption
                value={formikSelectOption.values.countries}
                onChange={(values) => {
                  formikSelectOption.setFieldValue("countries", values);
                }}
              >
                {countries.map((item: string) => (
                  <Option key={item} value={item}>
                    <TextWithBackground style={{ padding: "0" }}>
                      {item}
                    </TextWithBackground>
                  </Option>
                ))}
              </Select>
            </Descriptions.Item>
          ) : (
            <div>
              {formikSelectOption.values.countries.map((item: string) => (
                <TextWithBackground key={item}>{item}</TextWithBackground>
              ))}
            </div>
          )}
        </UserExperienceWrapper>
      </form>
      <PanelInformations
        formikPanelInformationsEnabled={formikPanelInformationsEnabled}
      />
      <InternalCorrespondants />
      <Proposals />
      <InternalReviews />
      <AmountOfFees />
    </UserWrapper>
  );
};
