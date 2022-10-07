import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../components/Themes";

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;

  ${mediaQueries(40)`
  transform: rotate(-270deg);
  right: -5rem;
  top: 12rem;
  `};
`;

export default BigTitle;
