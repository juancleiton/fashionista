import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;

  overflow: visible;
`;

export const SeachForm = styled.form`
  width: 100%;
  padding: 8px 24px;

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

export const SearchEmpty = styled.div`
  text-align: center;
  padding: 0 24px;
  margin-top: 64px;
`;
