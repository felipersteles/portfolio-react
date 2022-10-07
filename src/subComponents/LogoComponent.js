import React from "react";
import styled from "styled-components";
import { temaEscuro } from "../components/Themes";
import logo from '../assets/logo.png'

const LogoComponent = (props) => {
    return <Logo color={props.theme}><img src={ logo} alt='ratinho' />Teles</Logo>;
};

const Logo = styled.h1`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.color === "dark" ? temaEscuro.text : temaEscuro.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  img{
    width: 4rem;
    height: 4rem;
  }
`;

export default LogoComponent;
