import produce from "immer";

const INITIAL_STATE = {
  cart: [],
  modal: false,
  actualModal: "",
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@cart/ADD_TO_CART": {
        const { data } = action.payload;

        draft.cart = [...draft.cart, data];
        break;
      }

      case "@cart/REMOVE": {
        const productIndex = draft.cart.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }

        break;
      }

      case "@cart/UPDATE_AMOUNT_SUCCESS": {
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }

        break;
      }

      case "@cart/REMOVE_FROM_CART": {
        console.log("@cart/REMOVE_FROM_CART");

        break;
      }

      case "SHOW_MODAL": {
        const { typeModal } = action.payload;

        draft.modal = !draft.modal;
        draft.actualModal = typeModal;
        console.log("show");
      }

      default:
        break;
    }
  });
}
