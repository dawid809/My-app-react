import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';


const WorkspacesWrapper = styled.div`
position: relative;
height: 150px;
margin: 0.5% 5%;
`;

const SliderContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
justify-content: space-between;
`;

const SingleSlideContainer = styled.div`
width: 24%;
height: 90%;
background: red;
border: 1px solid gray;
border-radius: 5px;
z-index:5; 
`;

export const Workspaces: FC = () => {

    return (
        <WorkspacesWrapper>
            <div style={{margin: "10px 10px"}}>
            Workspaces
            </div>
            <SliderContainer>
                <SingleSlideContainer>

                </SingleSlideContainer>

                <SingleSlideContainer>

                </SingleSlideContainer>

                <SingleSlideContainer>

                </SingleSlideContainer>

                <SingleSlideContainer>

                </SingleSlideContainer>
            </SliderContainer>
        </WorkspacesWrapper>
    );
  };