import produce from "immer";

const INITIAL_STATE = {
  cart: [],
  modal: false,
  actualModal: "",
  total: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@cart/ADD_TO_CART": {
        const { data } = action.payload;

        const productExists = state.cart.find(
          (p) =>
            p.size === data.size &&
            p.sizes.sku === data.sizes.sku &&
            p.code_color === data.code_color
        );

        const currentAmount = productExists ? productExists.amount : 0;

        const amount = currentAmount + 1;

        if (productExists) {
          const productIndex = draft.cart.findIndex(
            (p) => p.size === data.size
          );

          if (productIndex >= 0) {
            draft.cart[productIndex].amount = Number(amount);
          }

          console.tron.log(draft.cart);
        } else {
          draft.cart = [
            ...draft.cart,
            {
              ...data,
              amount: 1,
            },
          ];
        }

        break;
      }

      case "@cart/REMOVE_FROM_CART": {
        const { data } = action.payload;

        const productIndex = draft.cart.findIndex(
          (p) =>
            p.size === data.size &&
            p.sizes.sku === data.sizes.sku &&
            p.code_color === data.code_color
        );

        if (productIndex >= 0) {
          draft.cart.splice(productIndex, 1);
        }

        break;
      }

      case "@cart/UPDATE_AMOUNT": {
        const { data, amount } = action.payload;

        const productIndex = draft.cart.findIndex(
          (p) =>
            p.size === data.size &&
            p.sizes.sku === data.sizes.sku &&
            p.code_color === data.code_color
        );

        if (productIndex >= 0 && amount >= 1) {
          draft.cart[productIndex].amount = amount;
        }

        break;
      }

      case "@cart/SHOW_MODAL": {
        const { typeModal } = action.payload;

        draft.modal = !draft.modal;
        draft.actualModal = typeModal;

        break;
      }

      default:
        break;
    }
  });
}
