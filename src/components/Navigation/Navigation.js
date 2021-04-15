import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { authSelectors } from "../../redux/auth";
import s from "./Navigation.module.css";

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink to={routes.home} className={s.link}>
        HOME
      </NavLink>
      {isAuthenticated && (
        <NavLink to={routes.contacts} className={s.link}>
          PHONEBOOK
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
