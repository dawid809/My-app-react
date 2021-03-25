import React, {FC} from 'react';
import styled from  'styled-components';

import {Header} from '../common/header/Header';
import {LeftMenu} from '../common/LeftMenu/LeftMenu';
//import {Wrapper} from '../../styledHelpers/Components';

const Wrapper = styled.div``;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

const ContentContext = styled.div`
background:gray;
width:72%;
min-height:1000px;
`;

const PublicationsWrapper = styled.div`
width: 90%;
background:whitesmoke;
height: 400px;
margin:5%;
`;

const Workspace = styled.div`
width: 90%;
background:whitesmoke;
height: 200px;
margin:5%;
`;

const MainPage: FC = () =>{
    return(
        <Wrapper>
            <Header></Header>
            <Content>
                <LeftMenu></LeftMenu>
                <ContentContext>
                    <PublicationsWrapper>
                        Publications
                    </PublicationsWrapper>
                    <Workspace>
                        Workspaces
                    </Workspace>
                </ContentContext>
            </Content>
        </Wrapper> 
    )
}

export default MainPage;