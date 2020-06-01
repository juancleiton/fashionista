import React, { useCallback, useEffect, useState } from "react";

import Catalog from "~/components/Catalog";
import Header from "~/components/Header";
import Modal from "~/components/Modal";
import api from "~/services/api";

import { Container } from "./styles";

function Home() {
  const [toggleModal, setToggleModal] = useState(false);
  const [actualModal, setActualModal] = useState("");
  const [products, setProducts] = useState([]);

  const handleGetProducts = useCallback(async () => {
    const response = await api.get("/products");

    setProducts(response.data);
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  const handleToggleModal = useCallback(
    (modal) => {
      setToggleModal(!toggleModal);

      setActualModal(modal);
    },
    [toggleModal]
  );

  return (
    <Container before={toggleModal}>
      <Header handleToggleModal={handleToggleModal} />

      <Catalog products={products} />

      {toggleModal && (
        <Modal
          products={products}
          handleToggleModal={handleToggleModal}
          actualModal={actualModal}
        />
      )}
    </Container>
  );
}

export default Home;
