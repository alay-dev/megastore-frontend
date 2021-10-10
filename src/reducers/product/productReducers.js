import {
  SET_ALL_PRODUCTS,
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_DESCRIPTION,
  SET_PRODUCT_DISCOUNT,
  SET_PRODUCT_IMAGE,
  SET_PRODUCT_NAME,
  SET_PRODUCT_ONOFFER,
  SET_PRODUCT_RATINGSAVERAGE,
  SET_PRODUCT_PRICE,
  RESET_PRODUCT,
  SET_PRODUCT_OLD_IMAGE,
  SET_DEAL_OF_THE_DAY,
  SET_TOP_SELLER,
} from "../../constants/product/productConst";

const initial_state = {
  all_products: [],
  deal_of_the_day: [],
  top_seller: [],
  name: "",
  price: "",
  category: "",
  on_offer: false,
  discount: "",
  description: "",
  ratings_average: "",
  image: "",
  old_image: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return (state = { ...state, all_products: action.payload });
    case SET_PRODUCT_NAME:
      return (state = { ...state, name: action.payload });
    case SET_PRODUCT_PRICE:
      return (state = { ...state, price: action.payload });
    case SET_PRODUCT_CATEGORY:
      return (state = { ...state, category: action.payload });
    case SET_PRODUCT_ONOFFER:
      return (state = { ...state, on_offer: action.payload });
    case SET_PRODUCT_DISCOUNT:
      return (state = { ...state, discount: action.payload });
    case SET_PRODUCT_DESCRIPTION:
      return (state = { ...state, description: action.payload });
    case SET_PRODUCT_RATINGSAVERAGE:
      return (state = { ...state, ratings_average: action.payload });
    case SET_PRODUCT_IMAGE:
      return (state = { ...state, image: action.payload });
    case SET_PRODUCT_OLD_IMAGE:
      return (state = { ...state, old_image: action.payload });
    case SET_DEAL_OF_THE_DAY:
      return (state = { ...state, deal_of_the_day: action.payload });
    case SET_TOP_SELLER:
      return (state = { ...state, top_seller: action.payload });
    case RESET_PRODUCT:
      return (state = {
        ...action.payload,
        all_products: [],
        name: "",
        price: "",
        category: "",
        on_offer: false,
        discount: "",
        description: "",
        image: "",
        ratings_average: "",
        old_image: "",
      });
    default:
      return state;
  }
}
