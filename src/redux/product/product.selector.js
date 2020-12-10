import { createSelector } from "reselect";

const selectProducts = (state) => state.products;

export const selectCurrentProducts = createSelector(
  [selectProducts],
  (products) => products
);
