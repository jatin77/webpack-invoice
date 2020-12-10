import { userActionTypes } from "./user.actionTypes";

const INITIAL_STATE = {
  token: null,
  email: null,
  password: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case userActionTypes.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case userActionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
