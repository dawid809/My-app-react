import React, {FC} from 'react';
import styled from  'styled-components';

import {Header} from '../common/header/Header';
import {LeftMenu} from '../common/LeftMenu/LeftMenu';
import {Wrapper} from '../../styledHelpers/Components';

//const Wrapper = styled.div``;

const Content = styled.div`
    display: flex;
`;

const ContentContext = styled.div`
background:gray;
width: 1000px;
min-height:1000px;
`;

const PublicationsWrapper = styled.div`

background:whitesmoke;
height: 400px;
margin:5%;
`;

const Workspace = styled.div`

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