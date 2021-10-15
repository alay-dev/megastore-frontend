import { SET_ALL_ORDERS } from "../../constants/order/orderConst";

const initial_state = {
  all_order: [],
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_ORDERS:
      return (state = { ...state, all_order: action.payload });
    default:
      return state;
  }
}
