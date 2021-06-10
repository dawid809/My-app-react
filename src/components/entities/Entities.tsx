import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { TopBar } from "../entities/TopBar";
import { FunctionallIIconsComponent } from "../entities/FunctionallIIconsComponent";

const EntitiesWrapper = styled.div`
  width: 100%;
  min-height: 1000px;
`;

const EntitiesContent = styled.div`
  background: ${Colors.whiteSmoke};
  height: 400px;
  margin: 1% 5%;
`;

const CompanyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto); */
  grid-gap: 5px;
  margin: 10px 20px;
  position: relative;
`;

const SingleEntity = styled.div`
  border: 1px solid ${Colors.lightGray};
  border-radius: 4px;
  margin-right: 5px;
  padding: 10px;
  img {
    float: left;
    height: 100px;
    width: 100px;
    margin-right: 10px;
  }

  h2 {
    color: ${Colors.blue};
    font-size: ${fontSize[20]};
  }

  p {
  }
`;

export const Entities: FC = () => {
  return (
    <EntitiesWrapper>
      <EntitiesContent>
        <TopBar />
        <FunctionallIIconsComponent />

        <CompanyWrapper>
          <SingleEntity>
            <img src="icons/repair.png" alt="" />
            <div>
              <h2>Title</h2>

              <p>Jakis tam textr asdasd dasasd</p>
            </div>
          </SingleEntity>
          <SingleEntity>
            <img src="icons/repair.png" alt="" />
            <div>
              <h2>Title</h2>

              <p>Jakis tam textr asdasd dasasd</p>
            </div>
          </SingleEntity>
          <SingleEntity>
            <img src="icons/repair.png" alt="" />
            <div>
              <h2>Title</h2>

              <p>Jakis tam textr asdasd dasasd</p>
            </div>
          </SingleEntity>
          <SingleEntity>
            <img src="icons/repair.png" alt="" />
            <div>
              <h2>Title</h2>

              <p>Jakis tam textr asdasd dasasd</p>
            </div>
          </SingleEntity>
        </CompanyWrapper>
      </EntitiesContent>
    </EntitiesWrapper>
  );
};
