import React, { useCallback } from "react";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { uuid } from "uuidv4";

import {
  removeFromCart,
  updateAmount,
  checkoutCart,
} from "~/store/modules/cart/actions";

import { formatPrice } from "../../../utils/format";
import * as S from "./styles";

export default function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const checkout = useCallback(() => {
    if (cart.length <= 0) return;

    dispatch(checkoutCart());

    history.push("/checkout");
  }, [dispatch, history, cart]);

  return (
    <>
      <S.Content>
        {cart.length >= 1 &&
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
                  <div>
                    <p className="current">{product.actual_price}</p>
                    <p className="installments">{product.installments}</p>
                  </div>

                  <button onClick={() => handleRemoveFromCart(product)}>
                    <FiTrash2 />
                  </button>
                </div>
              </S.Row>
            </S.Item>
          ))}
      </S.Content>

      {cart.length <= 0 && (
        <S.CartEmpty>
          <h1>Adicione produtos na sacola</h1>

          <FiShoppingBag />
        </S.CartEmpty>
      )}

      <S.Footer>
        <div className="footer total">Total: {formatPrice(total)}</div>

        <button className="footer checkout" onClick={checkout}>
          Finalizar compra
        </button>
      </S.Footer>
    </>
  );
}
