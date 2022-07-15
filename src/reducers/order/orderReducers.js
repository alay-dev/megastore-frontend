import {
  SET_ALL_ORDERS,
  SET_CURRENT_ORDER,
  SET_USER_ORDERS,
} from "../../constants/order/orderConst";

const initial_state = {
  all_order: [],
  current_order: [],
  user_orders: [],
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_ORDERS:
      return (state = { ...state, all_order: action.payload });
    case SET_CURRENT_ORDER:
      return (state = { ...state, current_order: action.payload });
    case SET_USER_ORDERS:
      return (state = { ...state, user_orders: action.payload });
    default:
      return state;
  }
}
