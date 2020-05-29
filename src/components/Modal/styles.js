import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  background: #fff;
  width: 40%;
  height: 100vh;

  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  z-index: 15;

  animation: ${appear} 0.8s;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
