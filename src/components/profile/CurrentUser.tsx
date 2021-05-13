import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';

import { Colors } from "../../styledHelpers/Colors";
import { getUsers } from '../../actions/usersActions';
import { GET_USERS } from '../../actions/actionTypes/userTypes';
import { getPhotos } from '../../actions/photosActions';
import { GET_PHOTOS } from '../../actions/actionTypes/photoTypes';

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducer';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>

const CurrentUserWrapper = styled.div`
display: flex;
flex-direction: column;
`;

const UserPhoto = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
`;

const PhotoWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
`;

const UserInfoWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
`;

const UserContactWrapper = styled.div`
display: flex;
flex-direction: column;
justify-self: flex-end;
`;

const SmallIcons = styled.img`
width: 15px;
height: 15px;
position: absolute;
right: 15px;
top: 15px;
display: flex;
cursor: pointer;
`;

const UserExperienceWrapper = styled.div`
border-bottom: 1px solid gray;
padding: 10px;
position: relative;
`;

const PanelInformationWrapper = styled.div`
margin: 10px;
`;

const ServicesAndProjectsWrapper = styled.div`
margin: 10px;
`;

const ProposalsWrapper = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid gray;
padding: 10px;
`;

const InternalReviewsWrapper = styled.div`
border-bottom: 1px solid gray;
padding: 10px;
`;

const AmountOfFeesWrapper = styled.div`
padding: 10px;
`;

const BoldText = styled.h2`
font-weight: bold;
`;

const TextWithBackground = styled.h3`
background: #a9e8ee;
color: #222252;
padding: 2px 5px;
border-radius: 5px;
/* margin: 5px 5px; */
margin: 0 5px;
display: table;
display: inline-block;
`;

const GrayText = styled.h3`
color: gray;
margin: 5px 0;
`;

export const CurrentUser: FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(getUsers())
        dispatch<GetPhotos>(getPhotos())
    }, []);

    const {usersList, photosList} = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
    }));

    return (
       <CurrentUserWrapper>
           <div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid gray", paddingBottom: "20px", position: "relative"}}>
           <PhotoWrapper>
            <UserPhoto src={photosList[1]?.url}/>
            See profile
            </PhotoWrapper>

            <UserInfoWrapper>
<BoldText>{usersList[0]?.name}</BoldText>
<BoldText>{usersList[0]?.company.name}</BoldText>
<h1>{usersList[0]?.address.city}</h1>
<h1>{usersList[0]?.username}</h1>
            </UserInfoWrapper>

            <UserContactWrapper>
                <SmallIcons src="icons/pen.png"/>
            <h2>{usersList[0]?.email}</h2>
<h1>{usersList[0]?.phone}</h1>
            </UserContactWrapper>
            </div>
            <UserExperienceWrapper>
            <SmallIcons src="icons/pen.png"/>
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

            <PanelInformationWrapper>
                <BoldText>Panel Informations</BoldText>

                <GrayText>Hourly fee</GrayText>
                <h1>610 PLN/Day(NoNegociated)</h1>
                <GrayText>Terms&Conditions </GrayText>
                <h1>Monthly cos tam </h1>
               <input type="file" />
            </PanelInformationWrapper>

            <ServicesAndProjectsWrapper>
            <BoldText>Services&Projects </BoldText>
            <h1>Corporate M&A and international acquisitions </h1>
            <BoldText>Internal correspondants </BoldText>
            <h1>Imie nazwisko img msg img msg </h1>
            <h1>Imie nazwisko img msg img msg </h1>
            </ServicesAndProjectsWrapper>

            <ProposalsWrapper>
            <BoldText>Proposals</BoldText>
            <BoldText>Name        Entity       Location Ecpertise Date Firm</BoldText>
            <h2>Operation Ti      Renault CO USA   #Tax    21/02/2018   Racine</h2>
            <h2>Op. Prometh       Renault HQ POL   #M&A    11/12/2019   Clifford chance</h2>
            <h2>Op. Latandre      Renault BR Italy #Social 01/01/2021   SVZ</h2>
            <h1>See more Proposals</h1>
            </ProposalsWrapper>

            <InternalReviewsWrapper>
            <BoldText>Internal reviews</BoldText>
            <BoldText>Name Entity Location Ecpertise Date  </BoldText>
            <h2>Operation Ti      Renault CO USA   #Tax    21/02/2018 </h2>
            <h2>Op. Prometh       Renault HQ POL   #M&A    11/12/2019 </h2>
            <h2>Op. Latandre      Renault BR Italy #Social 01/01/2021 </h2>
            <BoldText>See more Reviews</BoldText>
            </InternalReviewsWrapper>

            <AmountOfFeesWrapper>
            <BoldText>Amount of fees</BoldText>
            <BoldText>Year Const contor Total amount Law firm</BoldText>
            <h2>2019       CS 153   3 500P    Clifford Chance</h2>
            <h2>2018       CS 153   9 500P    Linklaters</h2>
            <h2>2017       CS 47    10 500P   Linklaters</h2>
            <h2>           CS 153   18 500P   Linklaters</h2>
            <h2>           CS 32    15 500P   Linklaters</h2>
            <h1>See more Reviews</h1>
            </AmountOfFeesWrapper>


       </CurrentUserWrapper>
    );
  };