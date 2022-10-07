import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Linkedin, Github } from "../components/AllSvgs";
import { temaEscuro } from "../components/Themes";

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/felipersteles" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? temaEscuro.text : temaEscuro.body}
          />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.linkedin.com/in/felipsteles/" }}
        >
          <Linkedin
            width={25}
            height={25}
            fill={props.theme === "dark" ? temaEscuro.text : temaEscuro.body}
          />
        </NavLink>
      </motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media only screen and (max-width: 600px) {
    bottom: 0;
    left: 1rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? temaEscuro.text : temaEscuro.body};
`;

export default SocialIcons;
