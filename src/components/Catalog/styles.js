import styled from "styled-components";

export const Catalog = styled.div``;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

export const Product = styled.li`
  padding: 16px 2px;
  position: relative;
  text-align: center;
  width: 25%;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  a {
    color: #212529;
    text-decoration: none;
    cursor: pointer;
  }

  figure {
    overflow: hidden;
    width: 100%;
    position: relative;

    span {
      position: absolute;
      right: 0;
      margin: 0;
      background-color: #212529;
      color: #fff;
      padding: 0 2px;
      z-index: 1;
    }

    img {
      width: 100%;
      transition: transform 0.2s ease-in-out;
      vertical-align: top;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  h3 {
    font-size: 16px;
    margin: 8px 0;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    .price--from {
      margin-right: 8px;
      font-size: 12px;
      color: #a7a7a7;
      text-decoration: line-through;
    }

    .price--to {
    }
  }
`;
