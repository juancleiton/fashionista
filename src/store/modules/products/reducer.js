import { produce } from "immer";

const INITIAL_STATE = {
  products: [],
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@cart/LOAD_PRODUCTS":
      return produce(state, (draft) => {
        const { products } = action.payload;

        draft.products = products;
      });

    default:
      return state;
  }
}
