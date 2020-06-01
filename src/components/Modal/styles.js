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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 64px;

  button {
    background: none;
    border: 0;

    svg {
      height: 30px;
      width: 30px;
    }
  }

  li {
    list-style: none;
  }
`;

export const Content = styled.div`
  background: #f9f9f9;
  padding: 0 24px;
`;

export const SeachForm = styled.form`
  width: 100%;
  padding: 8px 0;

  input {
    width: 100%;
    height: auto;
    border-radius: 4px;
    border: 0;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
    padding: 12px;
  }
`;

export const Item = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 16px 0;
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
  }
`;

export const Remove = styled.button`
  margin-top: 8px;
  color: red;
  background: none;
  border: 0;
  font-size: 12px;
`;
