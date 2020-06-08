import React, { useCallback } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { showModal } from "~/store/modules/cart/actions";

import Cart from "./Cart";
import Search from "./Search";
import * as S from "./styles";

export default function Modal() {
  const dispatch = useDispatch();

  const actualModal = useSelector((state) => state.cart.actualModal);

  const cart = useSelector((state) => state.cart.cart);

  const productsQuantity = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);

  const handleToggleModal = useCallback(
    (typeModal) => {
      dispatch(showModal(typeModal));
    },
    [dispatch]
  );

  return (
    <S.Container>
      <S.Header>
        <div>
          <button type="button" onClick={() => handleToggleModal()}>
            <FiArrowLeft />
          </button>

          <h2>
            {actualModal === "search"
              ? "Buscar Produtos"
              : `Sacola (${productsQuantity})`}
          </h2>

          <li />
        </div>
      </S.Header>

      <S.Content>
        {actualModal === "search" && <Search />}
        {actualModal === "cart" && <Cart />}
      </S.Content>
    </S.Container>
  );
}
