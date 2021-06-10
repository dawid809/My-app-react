import  React, { FC } from 'react';
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

const FilterWrapper = styled.div`
  box-shadow: ${Colors.shadow};
  width: 100%;
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
      height: 18px;
      width: 18px;
      margin: 0 10px;
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

export const Filter: FC = () => {
    return (
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
            style={{ width: "12px", height: "8px"}}
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
        <div>
        <img
          src="icons/plus.png"
          alt="Plus icon"
          style={{ width: "16px", height: "16px", marginRight: '10px' }}
        />
        <p style={{color: `${Colors.blue}`}}>Add filter choose property</p>
        <img
          src="icons/arrow-down.png"
          alt="Arrow down icon"
          style={{ width: "12px", height: "8px", margin: '0 10px'}}
        />
        </div>
      </FilterWrapper>
    )
}