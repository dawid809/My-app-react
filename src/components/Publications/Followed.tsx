import React, { Component } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.white};
  border: ${Colors.border};
  border-radius: 4px;
  top: 25px;
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

interface IFollowedProps {
  handleIsFollowed: VoidFunction;
  setAllFollowed: VoidFunction;
}

class Followed extends Component<IFollowedProps> {
  render(): JSX.Element {
    const { handleIsFollowed, setAllFollowed } = this.props;
    return (
      <Wrapper>
        <h2 onClick={setAllFollowed}>All</h2>
        <h2 onClick={handleIsFollowed}>Mine</h2>
      </Wrapper>
    );
  }
}

export default Followed;
