import React, { FC, useState } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import "../entities/index.css";

const FollowedWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.white};
  border: ${Colors.border};
  border-radius: 4px;
  top: 35px;
  overflow: hidden;
  z-index: 100;

  h2 {
    text-align: center;
    align-self: center;
    width: 100%;
    cursor: pointer;
    padding: 8px;
  }

  h2:hover {
    background-color: ${Colors.lightBlue};
    color: ${Colors.whiteSmoke};
  }
`;

interface IFollowedDropdownProps {
  handleIsFollowed: VoidFunction;
  setAllFollowed: VoidFunction;
}

export const FollowedDropdown: FC<IFollowedDropdownProps> = ({
  handleIsFollowed,
  setAllFollowed,
}) => {

  return (
    <FollowedWrapper>
      <h2 onClick={setAllFollowed}>All</h2>
      <h2 onClick={handleIsFollowed}>Mine</h2>
    </FollowedWrapper>
  );
};
