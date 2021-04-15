import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import s from "./UserMenu.module.css";

import myAvatar from "./avatar.png";

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={s.userMenu}>
      <img src={avatar} alt="" width="48" className={s.avatar} />
      <span className={s.span}>Hi, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar: myAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
