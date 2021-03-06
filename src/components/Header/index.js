import React, { useCallback } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

import { showModal } from "../../store/modules/cart/actions";
import * as S from "./styles";

export default function Header() {
  const cart = useSelector((state) => state.cart.cart);

  const productsQuantity = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);

  const dispatch = useDispatch();

  const handleToggleModal = useCallback(
    (typeModal) => {
      dispatch(showModal(typeModal));
    },
    [dispatch]
  );

  return (
    <S.Container>
      <header>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="header--buttons">
          <button type="button" onClick={() => handleToggleModal("search")}>
            <FiSearch />
          </button>

          <button type="button" onClick={() => handleToggleModal("cart")}>
            <FiShoppingBag />

            <div className="badge">{productsQuantity}</div>
          </button>
        </div>
      </header>
    </S.Container>
  );
}
