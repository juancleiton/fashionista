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
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
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

export const Header = styled.div`
  background: #fff;
  position: absolute;

  div {
    background: #fff;
    display: flex;

    align-items: center;
    position: fixed;
    padding: 0 24px;
    height: 64px;

    width: 100%;
  }

  button {
    background: none;
    border: 0;
    margin-right: 24px;

    svg {
      height: 30px;
      width: 30px;
    }
  }

  li {
    margin-left: auto;
    list-style: none;
  }
`;

export const Content = styled.div`
  background: #f9f9f9;
  margin-top: 64px;
`;
