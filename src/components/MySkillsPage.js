import React, { lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { temaClaro, mediaQueries } from "./Themes";
import { Gear, Develope } from "./AllSvgs";
import Loading from "../subComponents/Loading";
import { motion } from "framer-motion";

const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={temaClaro}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
          <ParticleComponent theme="light" />
          <Main>
            <Title>
              <Gear width={40} height={40} /> Backend Developer
            </Title>
            <Description>
              Crio aplicações em Nodejs para utilizar nas aplicações Frontend
              que desenvolvo.
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
              Gosto de exercer parte da minha criatividade desenvolvendo
              aplicações que iteragem diretamente com as pessoas.
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
      </Suspense>
    </ThemeProvider>
  );
};

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
  `};

  ${mediaQueries(30)`
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
  `};
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

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;
  `};
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

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};
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

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};
`;

export default MySkillsPage;
