import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { uuid } from "uuidv4";

import Header from "~/components/Header";
import Modal from "~/components/Modal";

import { addToCart } from "../../store/modules/cart/actions";
import * as S from "./styles";

function Product() {
  const modalStatus = useSelector((state) => state.cart.modal);
  const products = useSelector((state) => state.products.products);

  const [product, setProduct] = useState([]);
  const [sizeSelected, setSizeSelected] = useState(null);

  const dispatch = useDispatch();

  const location = useLocation();
  const productSelected = location.state;

  const loadProduct = useCallback(async () => {
    const data = products.filter(
      (item) =>
        item.name === productSelected.name &&
        item.code_color === productSelected.code_color
    );

    setProduct(data);
  }, [productSelected, products]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  const handleSelectSize = useCallback((size) => {
    setSizeSelected(size);
  }, []);

  const handleAddToCart = useCallback(
    (item) => {
      if (!sizeSelected) return;

      const data = { ...item, size: sizeSelected };

      dispatch(addToCart(data));
    },
    [dispatch, sizeSelected]
  );

  return (
    <S.Container before={modalStatus}>
      <Header />

      {product.map((p) => (
        <S.List key={uuid()}>
          <img src={p.image} alt="" />

          <S.Options>
            <h1>{p.name}</h1>

            <p>
              <span className="product--price">{p.actual_price}</span>{" "}
              <span className="product--installments">
                em até {p.installments}
              </span>
            </p>

            <div className="product--sizes">
              <p>Escolha o tamanho</p>

              <div>
                {p.sizes.map((item) =>
                  item.available === true ? (
                    <button
                      key={uuid()}
                      onClick={() => handleSelectSize(item.size)}
                      className={`button--size ${
                        item.size === sizeSelected
                          ? "button--size-selected"
                          : null
                      } ${!item.available ? "button--size-unavailable" : null}`}
                    >
                      {item.size}
                    </button>
                  ) : (
                    <button
                      key={uuid()}
                      className={`button--size ${
                        item.size === sizeSelected
                          ? "button--size-selected"
                          : null
                      } ${!item.available ? "button--size-unavailable" : null}`}
                    >
                      {item.size}
                    </button>
                  )
                )}
              </div>

              <button
                className="button--addToBag"
                onClick={() => handleAddToCart(p)}
              >
                Adicionar à Sacola
              </button>
            </div>
          </S.Options>
        </S.List>
      ))}

      {modalStatus && <Modal />}
    </S.Container>
  );
}

export default Product;
