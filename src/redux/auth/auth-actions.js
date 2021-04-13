import { createAction } from "@reduxjs/toolkit";

// регистрация
export const registrationRequest = createAction("contacts/registrationRequest");
export const registrationSuccess = createAction("contacts/registrationSuccess");
export const registrationSuccess = createAction("contacts/registrationError");

// ввести логин
export const loginRequest = createAction("contacts/loginRequest");
export const loginSuccess = createAction("contacts/loginSuccess");
export const loginError = createAction("contacts/loginError");

// выйти со своего пользователя
export const logoutRequest = createAction("contacts/logoutRequest");
export const logoutSuccess = createAction("contacts/logoutSuccess");
export const logoutError = createAction("contacts/logoutError");

//получить данные текущего пользователя
export const getCurrentUserRequest = createAction(
  "contacts/getCurrentUserRequest"
);
export const getCurrentUserSuccess = createAction(
  "contacts/getCurrentUserSuccess"
);
export const getCurrentUserError = createAction("contacts/getCurrentUserError");
