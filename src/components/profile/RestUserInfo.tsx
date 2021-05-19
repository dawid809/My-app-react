import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Colors } from "../../styledHelpers/Colors";
import { PanelInformations } from "./PanelInformations";
import { ServicesAndProjects } from "./ServicesAndProjects";
import { InternalCorrespondants } from "./InternalCorrespondants";
import { Proposals } from "./Proposals";
import { InternalReviews } from "./InternalReviews";
import { AmountOfFees } from "./AmountOfFees";
import { getUsers } from "../../actions/usersActions";
import { GET_USERS } from "../../actions/actionTypes/userTypes";
import { getPhotos } from "../../actions/photosActions";
import { GET_PHOTOS } from "../../actions/actionTypes/photoTypes";

import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IPhotosReducer } from "../../reducers/photosReducer";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const RestUserInfo: FC = () => {
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
    <UserWrapper>
      <UserExperienceWrapper>
        <EditIcon src="icons/pen.png" />
        <GrayText>Expertise</GrayText>
        <TextWithBackground>asdadsda</TextWithBackground>
        <TextWithBackground>asdadsda</TextWithBackground>
        <GrayText>Specialities</GrayText>
        <TextWithBackground>adsdas </TextWithBackground>
        <TextWithBackground>adsdas </TextWithBackground>
        <GrayText>Admission to practice law</GrayText>
        <TextWithBackground>asdadsda</TextWithBackground>
        <TextWithBackground>asdadsda</TextWithBackground>
        <GrayText>Countries</GrayText>
        <TextWithBackground>Tunisa</TextWithBackground>
      </UserExperienceWrapper>

      <PanelInformations></PanelInformations>

      <ServicesAndProjects></ServicesAndProjects>
      <InternalCorrespondants></InternalCorrespondants>
      <Proposals></Proposals>

      <InternalReviews></InternalReviews>

      <AmountOfFees></AmountOfFees>
    </UserWrapper>
  );
};
