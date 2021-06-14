import React, { FC, useState } from "react";
import styled from "styled-components";

import { Colors } from "../../styledHelpers/Colors";
import { fontSize } from "../../styledHelpers/FontSizes";

const Entity = styled.div`
  box-shadow: ${Colors.shadow};
  border-radius: 4px;
  margin-right: 5px;
  padding: 10px;
  display: flex;
  position: relative;
  img {
    float: left;
    height: auto;
    max-width: 100%;
    width: 125px;
    margin-right: 10px;
    border-radius: 4px;
  }
  div {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  h2 {
    margin-top: 5px;
    color: ${Colors.blue};
    font-size: ${fontSize[20]};
  }

  p {
    color: ${Colors.darkerGray};
    bottom: 15px;
    margin-bottom: 5px;
  }
`;

interface ISingleEntityProps {
  url: string;
  title: string;
  id: number;
}

export const SingleEntity: FC<ISingleEntityProps> = (props) => {
  const { url, title, id } = props;

  return (
    <Entity>
      <img src={url} alt="photo" />
      <div>
        <h2>{title}</h2>
        <p>{id}</p>
      </div>
    </Entity>
  );
};
