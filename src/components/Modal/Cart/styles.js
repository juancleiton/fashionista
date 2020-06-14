import { darken } from "polished";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
  10%, 90% {
    transform: rotate(-45deg);
  }

  20%, 80% {
    transform: rotate(45deg);
  }

  30%, 50%, 70% {
    transform: rotate(-45deg);
  }

  40%, 60% {
    transform: rotate(45deg);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;

  overflow: visible;
  margin-bottom: 128px;
`;

export const Item = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 16px 24px;
`;

export const Row = styled.div`
  display: flex;

  img {
    width: 25%;
    object-fit: cover;
  }

  .product__list__info {
    margin-left: 24px;

    .title {
      font-weight: bold;
    }

    .size {
      padding: 8px 0;
      color: #a7a7a7;
    }

    .quantity {
      display: flex;
      align-items: center;

      button {
        background: none;
        border: 1px solid #000;
        display: flex;

        svg {
          height: 20px;
          width: 20px;
        }
      }

      p {
        margin: 0 8px;
      }
    }
  }

  .product__list__prices {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    width: 25%;
    text-align: right;
    margin-left: auto;

    .current {
      font-weight: bold;
    }

    .installments {
      margin-top: 8px;
      color: #a7a7a7;
      font-size: 12px;
    }

    button {
      border: 0;
      background: none;

      svg {
        cursor: pointer;
        height: 20px;
        width: 20px;

        color: red;
      }
    }
  }
`;

export const CartEmpty = styled.div`
  text-align: center;
  padding: 0 24px;
  margin-top: 64px;

  svg {
    height: 50px;
    width: 50px;

    animation: ${appear} 0.8s;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  position: fixed;
  color: #fff;

  .footer {
    display: flex;
    align-items: center;

    height: 64px;
    padding: 0 24px;

    font-weight: bold;
  }

  div {
    background: #212529;
    height: 32px;

    font-size: 20px;
  }

  button {
    color: #fff;
    border: 0;

    font-size: 28px;
    background: #34cb79;

    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${darken(0.1, "#34cb79")};
    }
  }
`;
