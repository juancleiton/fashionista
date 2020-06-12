import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Catalog from "~/components/Catalog";
import Header from "~/components/Header";
import Modal from "~/components/Modal";
import api from "~/services/api";
import { loadProducts } from "~/store/modules/products/actions";

import { Container } from "./styles";

function Home() {
  const modalStatus = useSelector((state) => state.cart.modal);

  const dispatch = useDispatch();

  const handleGetProducts = useCallback(async () => {
    const response = await api.get("");

    dispatch(loadProducts(response.data));
  }, [dispatch]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  return (
    <Container before={modalStatus}>
      <Header />

      <Catalog />

      {modalStatus && <Modal />}
    </Container>
  );
}

export default Home;
