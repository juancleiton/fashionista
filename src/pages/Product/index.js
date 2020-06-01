import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { uuid } from "uuidv4";

import Header from "~/components/Header";
import Modal from "~/components/Modal";
import api from "~/services/api";

import * as S from "./styles";

function Product() {
  const [toggleModal, setToggleModal] = useState(false);
  const [actualModal, setActualModal] = useState("");
  const [products, setProducts] = useState([]);
  const [sizeSelected, setSizeSelected] = useState("");

  const location = useLocation();
  const productSelected = location.state;

  const handleGetProducts = useCallback(async () => {
    const response = await api.get("/products");

    const data = response.data.filter(
      (product) =>
        product.name === productSelected.name &&
        product.code_color === productSelected.code_color
    );

    setProducts(data);
  }, [productSelected]);

  const handleSelectSize = useCallback((size) => {
    setSizeSelected(size);
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
    <S.Container before={toggleModal}>
      <Header handleToggleModal={handleToggleModal} />

      {products.map((product) => (
        <S.List>
          <img src={product.image} alt="" />

          <S.Options>
            <h1>{product.name}</h1>

            <p>
              <span className="product--price">{product.actual_price}</span>{" "}
              <span className="product--installments">
                em até {product.installments}
              </span>
            </p>

            <div className="product--sizes">
              <p>Escolha o tamanho</p>

              <div>
                {product.sizes.map(
                  (item) =>
                    item.available && (
                      <button
                        onClick={() => handleSelectSize(item.size)}
                        className={`button--size ${
                          item.size === sizeSelected
                            ? "button--size-selected"
                            : null
                        }`}
                        value={item.sku}
                      >
                        {item.size}
                      </button>
                    )
                )}
              </div>

              <button className="button--addToBag">Adicionar à Sacola</button>
            </div>
          </S.Options>
        </S.List>
      ))}

      {toggleModal && (
        <Modal
          products={products}
          handleToggleModal={handleToggleModal}
          actualModal={actualModal}
        />
      )}
    </S.Container>
  );
}

export default Product;
