import { queryActionTypes } from "./query.actionTypes";

export const searchProduct = (data) => {
  return {
    type: queryActionTypes.SEARCH_PRODUCT,
    payload: data,
  };
};

export const setPriceRange = (data) => {
  return {
    type: queryActionTypes.SET_PRICE_RANGE,
    payload: data,
  };
};

export const setQuantityRange = (data) => {
  return {
    type: queryActionTypes.SET_QUANTITY_RANGE,
    payload: data,
  };
};

export const setStatus = (data) => {
  return {
    type: queryActionTypes.SET_STATUS,
    payload: data,
  };
};
