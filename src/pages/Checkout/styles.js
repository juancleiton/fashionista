import styled from "styled-components";

export const Container = styled.div`
  background: #f9f9f9;
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    button {
      background: #212529;
      color: #fff;
      font-weight: bold;
      border: 1px solid #212529;
      border-radius: 4px;
      padding: 12px;
      transition: box-shadow 0.2s ease-in-out;

      margin-top: 16px;

      &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
