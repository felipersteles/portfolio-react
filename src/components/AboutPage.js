import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { temaEscuro } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import alien from "../assets/Images/alien2.png";

const AboutPage = () => {
  return (
    <ThemeProvider theme={temaEscuro}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Alien>
          <img src={alien} alt="spaceman" />
        </Alien>
        <Main>
          Sou estudante de ciência da computação na Universidade Federal do Maranhão e
          as linguagens de programação que eu mais utilizo atualmente são JavaScript e Java, porém tenho conhecimento e projetos em várias linguagens.
          <br /> <br />
          Tenho interesse na área de desenvolvedor Frontend, pois sou apaixonado por arte e adoro proporcionar pras pessoas um teor de excelência ao usufruir de meus produtos e insumos.
          <br /> <br />Falo dois idiomas, já morei nos Estados Unidos e atualmente estou aprendendo russo.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;

const Alien = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

export default AboutPage;
