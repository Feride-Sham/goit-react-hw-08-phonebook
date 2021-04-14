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
});
const token = createReducer(null, {
  [registrationSuccess]: (_, { payload }) => payload.token,
});
const error = createReducer(null, {
  [registrationError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
