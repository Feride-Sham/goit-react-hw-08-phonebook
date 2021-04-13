import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const Navigation = () => {
  return (
    <nav>
      <NavLink to={routes.home}>HOME</NavLink>
      <NavLink to={routes.contacts}>PHONEBOOK</NavLink>
    </nav>
  );
};

export default Navigation;
