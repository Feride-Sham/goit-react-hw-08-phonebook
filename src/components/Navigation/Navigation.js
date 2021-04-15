import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { authSelectors } from "../../redux/auth";

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink to={routes.home}>HOME</NavLink>
      {isAuthenticated && <NavLink to={routes.contacts}>PHONEBOOK</NavLink>}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
