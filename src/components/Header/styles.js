import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 64px;
  background: #fff;

  position: fixed;
  top: 0;

  z-index: 2;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;

    img {
      height: 64px;
      width: 200px;
    }

    .header--buttons {
      display: flex;

      button {
        background: none;
        border: 0;

        &:last-child {
          margin-left: 24px;
          position: relative;
        }

        svg {
          width: 30px;
          height: 30px;

          @media (max-width: 425px) {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .badge {
      height: 20px;
      width: 20px;
      background: red;

      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -5px;
      right: -12px;

      color: #fff;
      font-weight: bold;
    }
  }
`;
