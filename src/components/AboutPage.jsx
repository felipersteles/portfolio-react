import React, { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { temaEscuro, mediaQueries } from "./Themes";
import alien from "../assets/Images/alien2.png";
import Loading from "../subComponents/Loading";
import { motion } from "framer-motion";

const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const AboutPage = () => {
  return (
    <ThemeProvider theme={temaEscuro}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />
          <ParticleComponent theme="dark" />

          <Alien>
            <img src={alien} alt="spaceman" />
          </Alien>
          <Main>
            <p>
              Sou estudante de ciência da computação na Universidade Federal do
              Maranhão e estágiario desenvolvedor na Tarken Ag.
            </p>
            
            <p>
              Atualmente trabalho principalmente com a linguagem de programação
              Typescript e utilizo as frameworks Nestjs e React. Na área
              acadêmica tenho um artigo escrito com o tema Deep Learning
              aplicado a doenças no tratao gastrointestinal cujo assunto é um
              tracker desenvolvido em Python utilizando framwork TensowFlow,
              artigo este que apresentei no SEMIC 2022.
            </p>

            <p>
              Falo dois idiomas, sendo eles inglês e português. Já morei nos
              Estados Unidos e atualmente estou aprendendo russo.
            </p>
          </Main>

          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

const Box = styled(motion.div)`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};

  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

  ${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`;

export default AboutPage;
