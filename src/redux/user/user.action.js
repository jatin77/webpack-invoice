import { userActionTypes } from "./user.actionTypes";

export const login = (data) => {
  return {
    type: userActionTypes.LOGIN,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: userActionTypes.USER_LOGOUT,
  };
};

export const updateEmail = (email) => {
  return {
    type: userActionTypes.UPDATE_EMAIL,
    payload: email,
  };
};

export const updatePassword = (password) => {
  return {
    type: userActionTypes.UPDATE_PASSWORD,
    payload: password,
  };
};
