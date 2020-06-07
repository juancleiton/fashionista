import React, { useCallback, useState } from "react";
import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { uuid } from "uuidv4";

import {
  removeFromCart,
  showModal,
  updateAmount,
} from "~/store/modules/cart/actions";

import { formatPrice } from "../../utils/format";
import * as S from "./styles";

export default function Modal() {
  const [productStored, setProductStored] = useState([]);

  const dispatch = useDispatch();

  const cart = useSelector((state) =>
    state.cart.cart.map((product) => ({
      ...product,
      subtotal:
        product.actual_price.replace("R$", "").replace(",", ".") *
        product.amount,
    }))
  );

  const total = cart.reduce((accumulator, currentValue) => {
    const result = accumulator + currentValue.subtotal;

    return result;
  }, 0);

  const actualModal = useSelector((state) => state.cart.actualModal);

  const products = useSelector((state) => state.products.products);

  const handleToggleModal = useCallback(
    (typeModal) => {
      dispatch(showModal(typeModal));
    },
    [dispatch]
  );

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

  const handleRemoveFromCart = useCallback(
    (product) => {
      dispatch(removeFromCart(product));
    },
    [dispatch]
  );

  const handleDecrementProduct = useCallback(
    (product) => {
      dispatch(updateAmount(product, product.amount - 1));
    },
    [dispatch]
  );

  const handleIncrementProduct = useCallback(
    (product) => {
      dispatch(updateAmount(product, product.amount + 1));
    },
    [dispatch]
  );

  return (
    <S.Container>
      <S.Header>
        <button type="button" onClick={() => handleToggleModal()}>
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
          productStored.length >= 1 &&
          productStored.map((product) => (
            <S.Item key={uuid()}>
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

        {actualModal === "search" && productStored.length <= 0 && (
          <h1>Procure um produto</h1>
        )}

        {actualModal === "bag" &&
          cart.length >= 1 &&
          cart.map((product) => (
            <S.Item key={uuid()}>
              <S.Row>
                <img src={product.image} alt={product.name} />

                <div className="product__list__info">
                  <p className="title">{product.name}</p>

                  <p className="size">Tam.: {product.size}</p>

                  <div className="quantity">
                    <button onClick={() => handleDecrementProduct(product)}>
                      <FiMinus />
                    </button>

                    <p>{product.amount}</p>

                    <button onClick={() => handleIncrementProduct(product)}>
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <div className="product__list__prices">
                  <p className="current">{product.actual_price}</p>
                  <p className="installments">{product.installments}</p>
                  Subtotal: {formatPrice(product.subtotal)}
                </div>
              </S.Row>
              <S.Remove onClick={() => handleRemoveFromCart(product)}>
                Remover Item
              </S.Remove>
            </S.Item>
          ))}

        {actualModal === "bag" && cart.length >= 1 && (
          <div>Total: {formatPrice(total)}</div>
        )}

        {actualModal === "bag" && cart.length <= 0 && (
          <h1>Nao tem nada no carrinho</h1>
        )}
      </S.Content>
    </S.Container>
  );
}
