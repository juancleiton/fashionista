export function loadProducts(products) {
  return {
    type: "@cart/LOAD_PRODUCTS",
    payload: { products },
  };
}
