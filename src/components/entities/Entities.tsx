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

const FilterWrapper = styled.div`
  border: ${Colors.border};
  width: 700px;
  padding: 10px;
  border-radius: 4px;
  p {
    color: ${Colors.darkerGray};
  }

  div {
    display: flex;
    padding-left: 15px;
    margin-top: 20px;
    align-items: center;
    img {
      height: 20px;
      width: 20px;
    }

    h3 {
      margin-left: 10px;
    }

    input {
      border: ${Colors.border};
      background: ${Colors.lightGray};
      border-radius: 4px;
      outline: none;
    }
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

      <FilterWrapper>
        <p> Rows are filtered by the following condition from the top.</p>
        <div>
          <img src="icons/close.png" alt="Close icon" />
          <h3> Where </h3>
          <h3>Company</h3>
          <img
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ width: "12px", height: "8px" }}
          />
          <h3>Contains</h3>
          <img
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ width: "12px", height: "8px" }}
          />
          <input type="text" placeholder="Type..." />
        </div>
        <div>
          <img src="icons/close.png" alt="Close icon" />
          <h3> Where </h3>
          <h3>Status</h3>
          <img
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ width: "12px", height: "8px" }}
          />
          <h3>is</h3>
          <img
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ width: "12px", height: "8px" }}
          />
          <input type="text" placeholder="Type..." />
          <h3>in</h3>
          <img
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ width: "12px", height: "8px" }}
          />
          <input type="text" placeholder="Entity..." />
        </div>
        <div>
          <img src="icons/close.png" alt="Close icon" />
          <h3> And </h3>
          <h3>Status</h3>
          <img
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ width: "12px", height: "8px" }}
          />
          <h3>Ends before</h3>
          <img
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ width: "12px", height: "8px" }}
          />
          <input type="text" placeholder="Date" />
          <h3>in</h3>
          <img
            src="icons/arrow-down.png"
            alt="Arrow down icon"
            style={{ width: "12px", height: "8px" }}
          />
          <input type="text" placeholder="Entity..." />
        </div>
        <img
          src="icons/plus.png"
          alt="Plus icon"
          style={{ width: "16px", height: "16px" }}
        />
        Add filter choose property
        <img
          src="icons/arrow-down.png"
          alt="Arrow down icon"
          style={{ width: "12px", height: "8px" }}
        />
      </FilterWrapper>
    </EntitiesWrapper>
  );
};
