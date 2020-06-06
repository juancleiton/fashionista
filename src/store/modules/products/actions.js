import { LOAD_PRODUCTS } from "./types";

export function loadProducts(product) {
  return {
    type: LOAD_PRODUCTS,
    payload: { product },
  };
}
