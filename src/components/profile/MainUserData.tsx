import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

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
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  cursor: pointer;
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

  return (
    <UserDataWrapper>
      <EditIcon src="icons/pen.png" />
      <UserInfoAndPhotoWrapper>
        <PhotoWrapper>
          <UserPhoto src={photosList[1]?.url} />
          <LinkText> See profile </LinkText>
        </PhotoWrapper>

        <UserInfoWrapper>
          <BoldText>{usersList[0]?.name}</BoldText>
          <BoldText>{usersList[0]?.company.name}</BoldText>
          <CustomText>{usersList[0]?.address.city}</CustomText>
          <CustomText>{usersList[0]?.username}</CustomText>
        </UserInfoWrapper>
      </UserInfoAndPhotoWrapper>

      <UserContactWrapper>
        <CustomText>{usersList[0]?.email}</CustomText>
        <CustomText>{usersList[0]?.phone}</CustomText>
      </UserContactWrapper>
    </UserDataWrapper>
  );
};
