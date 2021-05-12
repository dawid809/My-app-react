import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';


const ResumeWorkWrapper = styled.div`
position: relative;
background:whitesmoke;
height: 400px;
margin: 0.5% 5%;
`;

const ContractWrapper = styled.div`
`;

const SingleContractWrapper = styled.div`
background: white;
border-radius: 5px;
border: 1px solid lightgrey;
margin: 5px 0;
`;

const TopContainer = styled.div`
margin: 10px 5px;
margin-top: 30px;
display:flex;
justify-content: space-between;
`;

const Title = styled.h2`
`;

const RightIconsAndTextWrapper = styled.div`
display: flex;
flex-direction: row;
`;

const SmallImg = styled.img`
width: 16px;
height: 16px;
`;

const SmallImgArrow = styled.img`
width: 8px;
height: 5px;
`;


const CustomInput = styled.input`
border-color: gray;
padding: 3px;
border-radius: 5px;
`;

const FilterContainer = styled.div`
margin: 0 10px;
display: flex;
align-items: center;
`;

const FollowedContainer = styled.div`
display: flex;
align-items: center;
position: relative;
`;

const Subtititle = styled.h3`
color: blue;
margin: 0 5px;
`;

export const ResumeWork: FC = () => {

    return (
        <ResumeWorkWrapper>
            <TopContainer>
            <Title>Resume your work </Title>
            <RightIconsAndTextWrapper>
            <FilterContainer>
                <CustomInput type="text" placeholder="Filter by title..." />
                <SmallImg src="icons/search.png" alt="filtrowanie" style={{marginLeft:'-20px'}}/>
                </FilterContainer>
                <FollowedContainer>
                <SmallImg src="icons/broadcast.png" alt="transmitowanie" />
                <Subtititle>Followed</Subtititle>
                 <SmallImgArrow src="icons/arrow-down.png" alt="strzałka-dół" />
                 </FollowedContainer>
                 </RightIconsAndTextWrapper>
            </TopContainer>
           <ContractWrapper>
                <SingleContractWrapper>
                    adsadaadsasd
                    asdsdasda
                </SingleContractWrapper>

                <SingleContractWrapper>
                    adsadaadsasd
                    asdsdasda
                </SingleContractWrapper>

                <SingleContractWrapper>
                    adsadaadsasd
                    asdsdasda
                </SingleContractWrapper>
           </ContractWrapper>
        </ResumeWorkWrapper>
    );
  };