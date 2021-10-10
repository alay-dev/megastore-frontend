import {
  SET_BAKERY_CACHE,
  SET_BEVERAGE_CACHE,
  SET_COSMETIC_CACHE,
  SET_DEAL_OF_THE_DAY_CACHE,
  SET_EGG_SEAFOOD_CACHE,
  SET_FOODGRAIN_CACHE,
  SET_FRUIT_CACHE,
  SET_HOUSEHOLD_CACHE,
  SET_SNACK_CACHE,
  SET_TOP_SELLER_CACHE,
} from "../../constants/cache/cacheConst";

const initial_state = {
  bakery_cache: false,
  beverage_cache: false,
  cosmetic_cache: false,
  deal_of_the_day_cache: false,
  egg_seafood_cache: false,
  foodgrain_cache: false,
  fruit_cache: false,
  household_cache: false,
  snack_cache: false,
  top_seller_cache: false,
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_TOP_SELLER_CACHE:
      return (state = { ...state, top_seller_cache: action.payload });
    case SET_BAKERY_CACHE:
      return (state = { ...state, bakery_cache: action.payload });
    case SET_BEVERAGE_CACHE:
      return (state = { ...state, beverage_cache: action.payload });
    case SET_COSMETIC_CACHE:
      return (state = { ...state, cosmetic_cache: action.payload });
    case SET_DEAL_OF_THE_DAY_CACHE:
      return (state = { ...state, deal_of_the_day_cache: action.payload });
    case SET_EGG_SEAFOOD_CACHE:
      return (state = { ...state, egg_seafood_cache: action.payload });
    case SET_FOODGRAIN_CACHE:
      return (state = { ...state, foodgrain_cache: action.payload });
    case SET_FRUIT_CACHE:
      return (state = { ...state, fruit_cache: action.payload });
    case SET_HOUSEHOLD_CACHE:
      return (state = { ...state, household_cache: action.payload });
    case SET_SNACK_CACHE:
      return (state = { ...state, snack_cache: action.payload });
    default:
      return state;
  }
}
