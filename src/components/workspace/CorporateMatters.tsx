import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

const CorporateMattersWrapper = styled.div`
  background-color: #eeeeee;
  padding: 10px;
  border: ${Colors.border};
  border-radius: 5px;

  h2 {
    font-size: ${fontSize[16]};
    margin: 10px 20px;
    color: ${Colors.darkerGray};
  }

  div.display-row-wrapper {
    display: flex;
    flex-direction: row;
  }
`;

const HoverText = styled.h2`
  font-size: ${fontSize[16]};
  margin: 10px 20px;
  color: ${Colors.darkerGray};

  :hover {
    color: ${Colors.blue};
    cursor: pointer;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SingleMatter = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 33.3%;
  background-color: ${Colors.whiteSmoke};
  margin: 10px;
  box-shadow: ${Colors.shadow};
  border-radius: 5px;

  div.position-relative {
    position: relative;
  }

  div.position-relative > img:first-child {
    width: 50px;
    filter: opacity(0.6) drop-shadow(0 0 0 blue);
  }

  h3 {
    font-size: ${fontSize[22]};
    margin: 15px 0;
  }

  p {
    font-size: ${fontSize[16]};
    margin: 10px 0;
  }
  b {
    font-weight: bold;
  }
`;

const TransparentImg = styled.img`
  position: absolute;
  height: 100%;
  right: 10px;
  top: 0;
  filter: opacity(0.02) drop-shadow(0 0 0 blue);
`;

export const CorporateMatters: FC = () => {
  return (
    <CorporateMattersWrapper>
      <HeaderWrapper>
        <h2>Start working on corporate matters</h2>
        <HoverText>Hide</HoverText>
      </HeaderWrapper>
      <div className="display-row-wrapper">
        <SingleMatter>
          <div className="position-relative">
            <img src="icons/entities.png" alt="icon" />
            <h3>
              Explore your <b>entities</b>
            </h3>
            <p>
              Take a few minutes to look at the most important elements and
              epcificites of your entities.
            </p>
            <TransparentImg src="icons/entities.png" alt="icon" />
          </div>
        </SingleMatter>
        <SingleMatter>
          <div className="position-relative">
            <img src="icons/diagram.png" alt="icon" />
            <h3>
              Structure the <b>ownership</b>
            </h3>
            <p>
              Get a clear view of the ownership by looking at the ralations
              between individuals and entities.
            </p>
            <TransparentImg src="icons/diagram.png" alt="icon" />
          </div>
        </SingleMatter>
        <SingleMatter>
          <div className="position-relative">
            <img src="icons/calendar.png" alt="icon" />
            <h3>
              Define the <b>calendar</b>
            </h3>
            <p>
              Prepare future events by creating detailed plan around the life of
              your entity.
            </p>
            <TransparentImg src="icons/calendar.png" alt="icon" />
          </div>
        </SingleMatter>
      </div>
    </CorporateMattersWrapper>
  );
};
