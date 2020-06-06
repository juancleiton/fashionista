const INITIAL_STATE = {
  products: [],
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@products/LOAD_PRODUCTS":
      const { product } = action.payload;

      return { ...state, products: product };

    default:
      return state;
  }
}
