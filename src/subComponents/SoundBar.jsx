import React, {useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import track1 from "../assets/audio/czardas.mp3";
import track2 from "../assets/audio/demasiadoBonita.mp3";

const SoundBar = ({surpresa = true}) => {
  const ref = useRef(null);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box onClick={() => handleClick()}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />

      <audio src={surpresa ? track1 : track2} ref={ref} autoPlay={false} />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 13rem;
  top: 3.5rem;
  z-index: 10;
  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }

  @media only screen and (max-width: 600px) {
    left: 1rem;
    top: 7.5rem;
  }
`;

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`;

const Line = styled.span`
  background: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

export default SoundBar;
