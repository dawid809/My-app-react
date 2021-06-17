import React, { FC } from "react";
import styled from "styled-components";

import { Header } from "../common/header/Header";
import { LeftMenu } from "../common/leftMenu/LeftMenu";
import { Wrapper } from "../../styledHelpers/Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestPage from "../testPage/TestPage";
import { Publications } from "../publications/Publications";
import { Entities } from "../entities/Entities";
import { Ecosystem } from "../ecosystem/Ecosystem";
import { People } from "../people/People";
import { Administration } from "../administration/Administration";
import { Profile } from "../profile/Profile";
import { Workspace } from "../workspace/Workspace";
import { linkSmart } from "../common/smartLink/SmartLink";

const Content = styled.div`
  display: flex;
`;

const MainPage: FC = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Content>
          <LeftMenu />
          <Switch>
            <Route path="/" exact>
              <Publications />
            </Route>
            <Route path="/publications" exact>
              <Publications />
            </Route>
            <Route path="/ecosystem" exact>
              <Ecosystem />
            </Route>
            <Route path="/entities" exact>
              <Entities />
            </Route>
            <Route path="/people" exact>
              <People />
            </Route>
            <Route path="/administration" exact>
              <Administration />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/testPage" exact>
              <TestPage />
            </Route>
            <Route path="/workspaces">
              <Switch>
                <Route path="/workspaces/ClientContract" exact>
                  <Workspace
                    name="Client contract"
                    src={linkSmart("icons/file-signature.png")}
                  />
                </Route>
                <Route path="/workspaces/SupplierContract" exact>
                  <Workspace
                    name="Supplier contract"
                    src={linkSmart("icons/file-signature.png")}
                  />
                </Route>
                <Route path="/workspaces/Corporate" exact>
                  <Workspace
                    name="Corporate"
                    src={linkSmart("icons/entities.png")}
                  />
                </Route>
                <Route path="/workspaces/GroupNorms" exact>
                  <Workspace
                    name="Group norms"
                    src={linkSmart("icons/book-alt.png")}
                  />
                </Route>
                <Route path="/workspaces/RealEstateContracts" exact>
                  <Workspace
                    name="Real estate contracts"
                    src={linkSmart("icons/request.png")}
                  />
                </Route>
              </Switch>
            </Route>
          </Switch>
        </Content>
      </Wrapper>
    </Router>
  );
};

export default MainPage;
