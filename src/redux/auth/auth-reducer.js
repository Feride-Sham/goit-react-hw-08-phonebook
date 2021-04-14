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

const user = createReducer(initialUserState, {});
const token = createReducer(null, {});
const error = createReducer(null, {});

export default {
  user,
  token,
  error,
};
