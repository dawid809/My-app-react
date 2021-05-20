import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { getUsers } from "../../actions/usersActions";
import { getPhotos } from "../../actions/photosActions";

import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IPhotosReducer } from "../../reducers/photosReducer";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;

const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${Colors.lightGray};
  border-top: 1px dotted ${Colors.lightGray};
  position: relative;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const UserInfoWrapper = styled.div`
  margin-left: 10px;
`;

const UserInfoAndPhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: center;
`;

const UserContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-right: 10%;
  margin-bottom: 15px;
`;

const EditIcon = styled.img`
  width: 18px;
  height: 18px;
  align-self: center;
  display: flex;
`;

const CustomText = styled.h2`
  line-height: 1.3;
`;

const BoldText = styled.h2`
  font-weight: bold;
  line-height: 1.3;
`;

const LinkText = styled.h3`
  margin-top: 5px;
  color: ${Colors.lightBlue};
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

export const MainUserData: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
  }, []);

  const { usersList, photosList } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
  }));

  //
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
      name: usersList[0]?.name,
      companyName: usersList[0]?.company.name,
      address: usersList[0]?.address.city,
      username: usersList[0]?.username,
      email: usersList[0]?.email,
      phone: usersList[0]?.phone,
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

  const changeIcon = {
    edited: "icons/pen.png",
    noEdited: "icons/user.png",
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <UserDataWrapper>
        <EditWrapper>
          <EditButton onClick={editUserDatasHandle} type="submit">
            {" "}
            <EditIcon src="icons/pen.png" />
          </EditButton>
        </EditWrapper>
        <UserInfoAndPhotoWrapper>
          <PhotoWrapper>
            <UserPhoto src={photosList[1]?.url} />

            <LinkText> See profile </LinkText>
          </PhotoWrapper>
          {formikDatasEnabled ? (
            <UserInfoWrapper>
              <BoldText>{formik.values.name}</BoldText>
              <BoldText>{formik.values.companyName}</BoldText>
              <CustomText>{formik.values.address}</CustomText>
              <CustomText>{formik.values.username}</CustomText>
            </UserInfoWrapper>
          ) : (
            <UserInfoWrapper>
              <CustomInput
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                style={{ fontWeight: "bold" }}
              />
              <CustomInput
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                style={{ fontWeight: "bold" }}
              />
              <CustomInput
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              <CustomInput
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </UserInfoWrapper>
          )}
        </UserInfoAndPhotoWrapper>
        {formikDatasEnabled ? (
          <UserContactWrapper>
            <CustomText>{formik.values.email}</CustomText>
            <CustomText>{formik.values.phone}</CustomText>
          </UserContactWrapper>
        ) : (
          <UserContactWrapper>
            <CustomInput
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <CustomInput
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </UserContactWrapper>
        )}
      </UserDataWrapper>
    </form>
  );
};
