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

export const ResumeWork: FC = () => {

    return (
        <ResumeWorkWrapper>
            <TopContainer>
                Resume your work 
                <input type="text" placeholder="Filter by title..." />
                <img src="icons/search.png" alt="filtrowanie" />
                 Followed
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