import { produce } from "immer";

const INITIAL_STATE = {
  items: [],
  count: 0,
};
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
