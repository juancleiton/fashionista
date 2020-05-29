import React from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

import * as S from "./styles";

export default function Header({ handleToggleModal, handleActualModal }) {
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

          <button type="button" onClick={() => handleToggleModal("bag")}>
            <FiShoppingBag />

            <div className="badge">99</div>
          </button>
        </div>
      </header>
    </S.Container>
  );
}
