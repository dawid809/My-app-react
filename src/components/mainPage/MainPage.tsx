import React, {FC} from 'react';
import styled from  'styled-components';

import {Header} from '../common/header/Header';
import {LeftMenu} from '../common/LeftMenu/LeftMenu';
import {Wrapper} from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

//const Wrapper = styled.div``;

const Content = styled.div`
    display: flex;
`;

const ContentContext = styled.div`
background: ${Colors.white};
width: 1000px;
min-height:1000px;
`;

const PublicationsWrapper = styled.div`
background:whitesmoke;
height: 400px;
margin:5%;
border: 1px solid ${Colors.gray};
`;

const Workspace = styled.div`

background:whitesmoke;
height: 200px;
margin:5%;
border: 1px solid ${Colors.gray};
`;

const MainPage: FC = () =>{
    return(
        <Wrapper>
            <Header></Header>
            <Content>
                <LeftMenu/>
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