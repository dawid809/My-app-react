import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Select, Descriptions, Upload, Button } from "antd";
//import "antd/dist/antd.css";
//import "antd/dist/antd.css";
import 'antd/lib/style/dark.less';
import "antd/lib/select/style/index.css";
import "antd/lib/dropdown/style/index.css";
import "antd/lib/descriptions/style/index.css";

import { Colors } from "../../styledHelpers/Colors";
import { PanelInformations } from "./PanelInformations";
import { InternalCorrespondants } from "./InternalCorrespondants";
import { Proposals } from "./Proposals";
import { InternalReviews } from "./InternalReviews";
import { AmountOfFees } from "./AmountOfFees";
// import { getUsers } from "../../actions/usersActions";
// import { getPhotos } from "../../actions/photosActions";

// import { useSelector } from "react-redux";
// import { IState } from "../../reducers";
// import { IUsersReducer } from "../../reducers/usersReducers";
// import { IPhotosReducer } from "../../reducers/photosReducer";

// type GetUsers = ReturnType<typeof getUsers>;
// type GetPhotos = ReturnType<typeof getPhotos>;

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
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 8px;
  margin-bottom: 8px;
  display: table;
  display: inline-block;
`;

const GrayText = styled.h3`
  color: ${Colors.darkerGray};
  margin: 8px 5px;
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

interface IProps {
  formikSelectOptionsEnabled?: boolean
}
export const RestUserInfo: FC<IProps> = (props) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch<GetUsers>(getUsers());
  //   dispatch<GetPhotos>(getPhotos());
  // }, []);

  // const { usersList, photosList } = useSelector<
  //   IState,
  //   IUsersReducer & IPhotosReducer
  // >((globalState) => ({
  //   ...globalState.users,
  //   ...globalState.photos,
  // }));
{console.log(props)}

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

    console.log('formiksele',formikSelectOptionsEnabled)
    console.log('setformik',setFormikSelectOptionsEnabled);

  const editSelectOptionHandle = () => {
    const disable = formikSelectOptionsEnabled;
    setFormikSelectOptionsEnabled(!disable);
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
            <EditButton  onClick={editSelectOptionHandle} type="submit">
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
      {/* <PanelInformations /> */}
      <PanelInformations />
      <InternalCorrespondants />
      <Proposals formikSelectOptionsEnabled={formikSelectOptionsEnabled} />

      <InternalReviews />

      <AmountOfFees/>
    </UserWrapper>
  );
};

// nr={formikSelectOptionsEnabled}
// setOptions={setFormikSelectOptionsEnabled}