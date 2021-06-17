import React, {FC} from 'react';
import styled from  'styled-components';

import {Header} from '../common/header/Header';
import {LeftMenu} from '../common/leftMenu/LeftMenu';
import {Wrapper} from '../../styledHelpers/Components';
import  {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  TestPage from '../testPage/TestPage';
import { Publications } from '../publications/Publications';
import { Entities } from '../entities/Entities';
import { Ecosystem } from '../ecosystem/Ecosystem';
import { People } from '../people/People';
import { Administration } from '../administration/Administration';
import { Profile } from '../profile/Profile';
import  {Workspace}  from '../workspace/Workspace';

const Content = styled.div`
    display: flex;
`;

const MainPage: FC = () =>{
    return(
        <Router>
            <Wrapper>
                <Header/ >
                <Content>
                    <LeftMenu/>
                        <Switch>
                            <Route path="/" exact>
                                <Publications />
                            </Route>
                            <Route path="/publications" exact >
                                <Publications />
                            </Route>
                            <Route path="/ecosystem" exact >
                                <Ecosystem />
                            </Route>
                            <Route path="/entities" exact >
                                <Entities />
                            </Route>
                            <Route path="/people" exact >
                                <People />
                            </Route>
                            <Route path="/administration" exact >
                                <Administration />
                            </Route>
                            <Route path="/profile" exact >
                                <Profile />
                            </Route>
                            <Route path="/testPage" exact >
                               <TestPage />
                            </Route>
                            <Route path="/workspaces" >
                            <Switch>
                                <Route path="/workspaces/SupplierContract" exact>
                                    <Workspace name="Supplier contract" url="https://picsum.photos/id/1/200/300"/>
                                </Route>
                            </Switch>
                            </Route>
                        </Switch>
                </Content>
            </Wrapper> 
        </Router>
    )
}

export default MainPage;