import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "~/components/Header";

import { Container } from "./styles";

function Home() {
  const modalStatus = useSelector((state) => state.cart.modal);

  return (
    <Container before={modalStatus}>
      <Header />

      <h1>Obrigado e volte sempre</h1>

      <Link to="/">
        <button>Voltar para pagina inicial</button>
      </Link>
    </Container>
  );
}

export default Home;
