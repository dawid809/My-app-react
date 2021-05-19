import styled from "styled-components";
import { Colors } from "./Colors";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Wrapper = styled.div`
  background: whitesmoke;
  margin-left: auto;
  margin-right: auto;
  width: auto;
`;

export const CustomImg = styled.img``;

export const CustomImgWithMargin = styled.img`
  margin-right: 15px;
  width: 23px;
`;

export const CustomImageWithBorder = styled.img`
  border: 1px solid ${Colors.black};
  padding: 3px 4px;
  border-radius: 5px;
  position: absolute;
  right: 0px;
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${Colors.black};
  }

  &:hover {
    text-decoration: none;
    color: ${Colors.blue};
  }
`;
