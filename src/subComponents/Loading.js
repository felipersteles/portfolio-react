import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Box>
      <Besteira>
        <div className="loadingio-spinner-bean-eater-zy28yly0wqn">
          <div className="ldio-wg7wqloygyn">
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </Besteira>
    </Box>
  );
};

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Besteira = styled.div`
  @keyframes ldio-wg7wqloygyn-1 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes ldio-wg7wqloygyn-2 {
    0% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(225deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .ldio-wg7wqloygyn > div:nth-child(2) {
    transform: translate(-15px, 0);
  }
  .ldio-wg7wqloygyn > div:nth-child(2) div {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 120px;
    height: 60px;
    border-radius: 120px 120px 0 0;
    background: #5f2a62;
    animation: ldio-wg7wqloygyn-1 1s linear infinite;
    transform-origin: 60px 60px;
  }
  .ldio-wg7wqloygyn > div:nth-child(2) div:nth-child(2) {
    animation: ldio-wg7wqloygyn-2 1s linear infinite;
  }
  .ldio-wg7wqloygyn > div:nth-child(2) div:nth-child(3) {
    transform: rotate(-90deg);
    animation: none;
  }
  @keyframes ldio-wg7wqloygyn-3 {
    0% {
      transform: translate(190px, 0);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    100% {
      transform: translate(70px, 0);
      opacity: 1;
    }
  }
  .ldio-wg7wqloygyn > div:nth-child(1) {
    display: block;
  }
  .ldio-wg7wqloygyn > div:nth-child(1) div {
    position: absolute;
    top: 92px;
    left: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #bf9000;
    animation: ldio-wg7wqloygyn-3 1s linear infinite;
  }
  .ldio-wg7wqloygyn > div:nth-child(1) div:nth-child(1) {
    animation-delay: -0.67s;
  }
  .ldio-wg7wqloygyn > div:nth-child(1) div:nth-child(2) {
    animation-delay: -0.33s;
  }
  .ldio-wg7wqloygyn > div:nth-child(1) div:nth-child(3) {
    animation-delay: 0s;
  }
  .loadingio-spinner-bean-eater-zy28yly0wqn {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-wg7wqloygyn {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-wg7wqloygyn div {
    box-sizing: content-box;
  }
`;

export default Loading;
