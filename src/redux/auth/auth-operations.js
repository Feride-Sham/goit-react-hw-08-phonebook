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

const register = (credentials) => async (dispatch) => {
  dispatch(registrationRequest());

  try {
    const response = await axios.post("/users/signup", credentials);

    dispatch(registrationSuccess(response.data));
  } catch (error) {
    dispatch(registrationError(error));
  }
};

const login = (credentials) => (dispatch) => {};

const logout = (credentials) => (dispatch) => {};

const getCurrentUser = (credentials) => (dispatch) => {};

export default { register, login, logout, getCurrentUser };
