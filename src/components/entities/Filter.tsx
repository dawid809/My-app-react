import React, { FC } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";
import { linkSmart } from "../common/smartLink/SmartLink";

const CustomInput = styled.input`
  border: ${Colors.border};
  background: ${Colors.lightGray};
  border-radius: 4px;
  outline: none;
`;

const ArrowIcon = styled.img`
  width: 11px;
  height: 7px;
  margin: 0 10px;
  cursor: pointer;
`;

const XIcon = styled.img`
  height: 16px;
  width: 16px;
  margin: 0 2px 0 10px;
  cursor: pointer;
`;

const FilterWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  margin: 25px 0;
  box-shadow: ${Colors.shadow};
  p {
    margin: 0 20px;
    color: ${Colors.darkerGray};
    font-size: ${fontSize[18]};
  }

  div {
    display: flex;
    margin: 15px;
    align-items: center;

    h3 {
      margin-left: 10px;
    }

    input {
      border: ${Colors.border};
      background: ${Colors.lightGray};
      border-radius: 4px;
      outline: none;
      padding: 5px;
      :focus {
        border-color: ${Colors.darkerGray};
      }
      ::placeholder {
        color: ${Colors.gray};
      }
    }
  }
`;

export const Filter: FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <FilterWrapper>
        <p> Rows are filtered by the following condition from the top.</p>
        <div>
          <XIcon src={linkSmart("icons/close.png")} alt="Close icon" />
          <h3> Where </h3>
          <h3>Company</h3>
          <ArrowIcon src={linkSmart("icons/arrow-down.png")} alt="Arrow down icon" />
          <h3>Contains</h3>
          <ArrowIcon src={linkSmart("icons/arrow-down.png")} alt="Arrow down icon" />
          <input type="text" placeholder="Type..." />
        </div>
        <div>
          <XIcon src={linkSmart("icons/close.png")} alt="Close icon" />
          <h3> Where </h3>
          <h3>Status</h3>
          <ArrowIcon src={linkSmart("icons/arrow-down.png")} alt="Arrow down icon" />
          <h3>is</h3>
          <ArrowIcon src={linkSmart("icons/arrow-down.png")} alt="Arrow down icon" />
          <input type="text" placeholder="Type..." />
          <h3>in</h3>
          <ArrowIcon src={linkSmart("icons/arrow-down.png")} alt="Arrow down icon" />
          <CustomInput type="text" placeholder="Entity..." />
        </div>
        <div>
          <XIcon src={linkSmart("icons/close.png")} alt="Close icon" />
          <h3> And </h3>
          <h3>Status</h3>
          <ArrowIcon src={linkSmart("icons/arrow-down.png")} alt="Arrow down icon" />
          <h3>Ends before</h3>
          <ArrowIcon src={linkSmart("icons/arrow-down.png")} alt="Arrow down icon" />
          <input type="text" placeholder="Date" />
          <h3>in</h3>
          <ArrowIcon src={linkSmart("icons/arrow-down.png")} alt="Arrow down icon" />
          <input type="text" placeholder="Entity..." />
        </div>
        <div style={{ paddingBottom: "15px" }}>
          <XIcon src={linkSmart("icons/plus.png")} alt="Plus icon" />
          <p style={{ color: `${Colors.blue}` }}>Add filter choose property</p>
          <ArrowIcon src={linkSmart("icons/arrow-down.png")} alt="Arrow down icon" />
        </div>
      </FilterWrapper>
    </div>
  );
};
