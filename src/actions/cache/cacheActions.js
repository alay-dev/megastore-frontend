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

export function set_bakery_cache(payload) {
  return {
    type: SET_BAKERY_CACHE,
    payload: payload,
  };
}

export function set_beverage_cache(payload) {
  return {
    type: SET_BEVERAGE_CACHE,
    payload: payload,
  };
}

export function set_cosmetic_cache(payload) {
  return {
    type: SET_COSMETIC_CACHE,
    payload: payload,
  };
}

export function set_deal_of_the_day_cache(payload) {
  return {
    type: SET_DEAL_OF_THE_DAY_CACHE,
    payload: payload,
  };
}

export function set_egg_seafood_cache(payload) {
  return {
    type: SET_EGG_SEAFOOD_CACHE,
    payload: payload,
  };
}

export function set_foodgrain_cache(payload) {
  return {
    type: SET_FOODGRAIN_CACHE,
    payload: payload,
  };
}

export function set_fruit_cache(payload) {
  return {
    type: SET_FRUIT_CACHE,
    payload: payload,
  };
}

export function set_household_cache(payload) {
  return {
    type: SET_HOUSEHOLD_CACHE,
    payload: payload,
  };
}

export function set_snack_cache(payload) {
  return {
    type: SET_SNACK_CACHE,
    payload: payload,
  };
}

export function set_top_seller_cache(payload) {
  return {
    type: SET_TOP_SELLER_CACHE,
    payload: payload,
  };
}
