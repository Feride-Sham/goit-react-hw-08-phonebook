import React from "react";

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div>
      <img src={avatar} alt="" width="48" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
