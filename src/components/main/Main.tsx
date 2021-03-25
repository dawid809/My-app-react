import React, {FC} from 'react';
import styled from  'styled-components';

import {Header} from '../common/header/Header';
//import {Profile} from '../common/profile/Profile';

const Wrapper = styled.div``;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

const MainPage: FC = () =>{
    return(
        <Wrapper>
            <Header></Header>
            <Content>
                <div>Content</div>
            </Content>
        </Wrapper> 
    )
}

export default MainPage;