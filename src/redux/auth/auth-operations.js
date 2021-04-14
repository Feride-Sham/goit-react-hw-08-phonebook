import axios from "axios";
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
axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// POST  ​/users​/signup
// Создать нового пользователя
const register = (credentials) => async (dispatch) => {
  dispatch(registrationRequest());

  try {
    const response = await axios.post("/users/signup", credentials);
    console.log(response);
    dispatch(registrationSuccess(response.data));
  } catch (error) {
    dispatch(registrationError(error));
  }
};

// POST ​/users​/login
// Залогинить пользователя
const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);
    console.log(response);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

const logout = (credentials) => (dispatch) => {};

const getCurrentUser = (credentials) => (dispatch) => {};

export default { register, login, logout, getCurrentUser };
