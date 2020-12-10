import { queryActionTypes } from "./query.actionTypes";

const INITIAL_STATE = {
  searchTerm: "",
  priceRange: [5, 60],
  quantityRange: [1, 50],
  status: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case queryActionTypes.SEARCH_PRODUCT:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case queryActionTypes.SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };
    case queryActionTypes.SET_QUANTITY_RANGE:
      return {
        ...state,
        quantityRange: action.payload,
      };
    case queryActionTypes.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
