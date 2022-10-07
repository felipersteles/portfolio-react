import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { temaClaro } from "./Themes";
import { Gear, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={temaClaro}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Gear width={40} height={40} /> Backend Developer
          </Title>
          <Description>
            Crio aplicações em Nodejs para utilizar nas aplicações Frontend que desenvolvo.
          </Description>
          <Description>
            <strong>Gosto de utilizar:</strong>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
            </ul>
          </Description>
          <Description>
            <strong>Ferramentas</strong>
            <ul>
              <li>MongoDB</li>
              <li>Cosmicjs</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            Gosto de exercer parte da minha criatividade desenvolvendo aplicações que iteragem diretamente com as pessoas. 
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Ajax, Styled-components, etc.
            </p>
          </Description>
          <Description>
            <strong>Ferramentas</strong>
            <p>VScode, Github, Figma etc.</p>
          </Description>
        </Main>

        <BigTitle text="Habilidades" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

export default MySkillsPage;
