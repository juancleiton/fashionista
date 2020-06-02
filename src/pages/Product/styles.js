import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #f9f9f9;
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

export const List = styled.div`
  padding: 24px;
  display: flex;

  max-width: 960px;
  margin: 0 auto;
  padding: 24px;

  @media (max-width: 768px) {
    display: block;
  }

  img {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Options = styled.div`
  margin-left: 16px;
  color: #212529;

  .product--price {
    font-weight: bold;
    font-size: 16px;
  }

  .product--installments {
    font-weight: bold;
    color: #a7a7a7;
  }

  .product--sizes {
    margin: 16px 0;

    p {
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 8px;
    }

    button {
      background: none;
      border: 1px solid #212529;
      border-radius: 4px;
      padding: 12px;
      transition: box-shadow 0.2s ease-in-out;

      &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }
    }

    .button--size {
      transition: background 0.2s ease-in-out;

      &:hover {
        background: #212529;
        color: #fff;
      }

      & + button {
        margin-left: 8px;
      }
    }

    .button--size-unavailable {
      background: #ddd;
      border: 1px solid #ddd;
      color: #fff;
      cursor: not-allowed;

      &:hover {
        background: #ddd;
        color: #fff;
        box-shadow: none;
      }
    }

    .button--size-selected {
      background: #212529;
      color: #fff;
    }

    .button--addToBag {
      width: 100%;
      margin-top: 16px;
      background: #212529;
      color: #fff;
    }
  }
`;
