import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Catalog from "~/components/Catalog";
import Header from "~/components/Header";
import Modal from "~/components/Modal";
import api from "~/services/api";
import { loadProducts } from "~/store/modules/products/actions";

import { Container } from "./styles";

function Home() {
  const [toggleModal, setToggleModal] = useState(false);
  const [actualModal, setActualModal] = useState("");

  const dispatch = useDispatch();

  const handleGetProducts = useCallback(async () => {
    const response = await api.get("");

    dispatch(loadProducts(response.data));
  }, [dispatch]);

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

      <Catalog />

      {toggleModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          actualModal={actualModal}
        />
      )}
    </Container>
  );
}

export default Home;
