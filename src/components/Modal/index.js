import React, { useCallback, useState } from "react";
import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";

import * as S from "./styles";

export default function Modal({ handleToggleModal, actualModal }) {
  const [productStored, setProductStored] = useState([]);

  const products = useSelector((state) => state.products.products);

  const handleProductsFiltered = useCallback(
    (e) => {
      const word = e.target.value.toUpperCase();

      if (word.length <= 0) {
        return setProductStored([]);
      }

      const filteredResults = products.filter((p) => {
        const productToSearch = p.name.toUpperCase();

        return productToSearch ? p.name.includes(word) : null;
      });

      return setProductStored(filteredResults);
    },
    [products]
  );

  return (
    <S.Container>
      <S.Header>
        <button type="button" onClick={handleToggleModal}>
          <FiArrowLeft />
        </button>

        <h2>{actualModal === "search" ? "Buscar Produtos" : "Carrinho"}</h2>

        <li />
      </S.Header>

      <S.Content>
        {actualModal === "search" && (
          <S.SeachForm>
            <input
              type="text"
              placeholder="Digite o nome do produto"
              onChange={handleProductsFiltered}
            />
          </S.SeachForm>
        )}

        {actualModal === "search" &&
          productStored.map((product) => (
            <S.Item key={product.code_color}>
              <S.Row>
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <img
                    src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
                    alt={product.name}
                  />
                )}

                <div className="product__list__info">
                  <p className="title">{product.name}</p>
                </div>

                <div className="product__list__prices">
                  <p className="current">{product.actual_price}</p>
                  <p className="installments">{product.installments}</p>
                </div>
              </S.Row>
            </S.Item>
          ))}

        {actualModal === "bag" &&
          productStored.map((product) => (
            <S.Item key={product.code_color}>
              <S.Row>
                <img src={product.image} alt={product.name} />

                <div className="product__list__info">
                  <p className="title">{product.name}</p>

                  <p className="size">Tam.: G</p>

                  <div className="quantity">
                    <button>
                      <FiMinus />
                    </button>

                    <p>99</p>

                    <button>
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <div className="product__list__prices">
                  <p className="current">{product.actual_price}</p>
                  <p className="installments">{product.installments}</p>
                </div>
              </S.Row>

              <S.Remove>Remover Item</S.Remove>
            </S.Item>
          ))}
      </S.Content>
    </S.Container>
  );
}
