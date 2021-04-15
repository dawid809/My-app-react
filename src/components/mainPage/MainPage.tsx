import React, {FC} from 'react';
import styled from  'styled-components';

import {Header} from '../common/header/Header';
import {LeftMenu} from '../common/LeftMenu/LeftMenu';
import {Wrapper} from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import  {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Publications } from '../publications/Publications';
import { Entities } from '../entities/Entities';
import { Ecosystem } from '../ecosystem/Ecosystem';
import { People } from '../people/People';


//const Wrapper = styled.div``;

const Content = styled.div`
    display: flex;
`;

const MainPage: FC = () =>{
    return(
        <Router>
            <Wrapper>
                <Header></Header>
                <Content>
                    <LeftMenu/>
                        <Switch>
                            <Route path="/" exact>
                                Home
                            </Route>
                            <Route path="/publications" exact >
                                <Publications/>
                            </Route>
                            <Route path="/ecosystem" exact >
                                <Ecosystem/>
                            </Route>
                            <Route path="/entities" exact >
                                <Entities/>
                            </Route>
                            <Route path="/people" exact >
                                <People/>
                            </Route>
                        </Switch>
                </Content>
            </Wrapper> 
        </Router>
    )
}

export default MainPage;