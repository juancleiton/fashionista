import produce from "immer";

const INITIAL_STATE = {
  products: [],
};

export default function productList(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@products/LOAD_PRODUCTS": {
        const { product } = action.payload;

        draft.products = product;

        break;
      }

      default:
        break;
    }
  });
}
