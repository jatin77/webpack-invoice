import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import productReducer from "./product/product.reducer";
import queryReducer from "./query/query.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "products"],
};

const appReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  query: queryReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
