import { createSelector } from "reselect";

const selectQuery = (state) => state.query;

export const selectCurrentQuery = createSelector([selectQuery], (user) => user);
