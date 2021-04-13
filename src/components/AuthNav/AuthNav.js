import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const AuthNav = () => {
  return (
    <div>
      <NavLink to={routes.registration}>Registration</NavLink>
      <NavLink to={routes.login}>Login</NavLink>
    </div>
  );
};

export default AuthNav;
