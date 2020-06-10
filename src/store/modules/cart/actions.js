import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SHOW_MODAL,
  UPDATE_AMOUNT,
  CHECKOUT,
} from "./types";

export function showModal(typeModal) {
  return {
    type: SHOW_MODAL,
    payload: { typeModal },
  };
}

export function addToCart(data) {
  return {
    type: ADD_TO_CART,
    payload: { data },
  };
}

export function removeFromCart(data) {
  return {
    type: REMOVE_FROM_CART,
    payload: { data },
  };
}

export function updateAmount(data, amount) {
  return {
    type: UPDATE_AMOUNT,
    payload: { data, amount },
  };
}

export function checkoutCart() {
  return {
    type: CHECKOUT,
  };
}
