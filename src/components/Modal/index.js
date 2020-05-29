import React from "react";

import { Container } from "./styles";

export default function Modal({ handleToggleModal, actualModal }) {
  const array = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
  ];

  return (
    <Container>
      <h1>{actualModal === "search" && "Search"}</h1>
      <h1>{actualModal === "bag" && "Bag"}</h1>

      <button type="button" onClick={handleToggleModal}>
        FECHAR
      </button>

      {array.map((item, index) => (
        <h1 key={index}>Teste</h1>
      ))}
    </Container>
  );
}
