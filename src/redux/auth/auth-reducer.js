import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

const initialUserState = {
  name: null,
  email: null,
};

// из response (операция register) приходит объект со свойствами
// user(объект:email,name) и token(строка)
const user = createReducer(initialUserState, {
  [registrationSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
});
const token = createReducer(null, {
  [registrationSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [registrationError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
