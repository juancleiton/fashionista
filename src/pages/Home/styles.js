import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #f9f9f9;
  height: 100vh;
  margin-top: 64px;

  ${(props) =>
    props.before
      ? css`
          &::before {
            backface-visibility: visible;
            background: radial-gradient(
              ellipse at center,
              #7a7a7a 0,
              #000 100%
            );
            bottom: 0;
            content: "";
            height: 100vh;
            opacity: 0.75;
            pointer-events: all;
            position: fixed;
            right: 0;
            visibility: visible;
            width: 100vw;
            z-index: 3;
          }
        `
      : null}
`;

export const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
`;
