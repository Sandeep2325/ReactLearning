import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

function Logout() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
    style={{ transition: "background-color 0.2s", "background-color": "darkturquoise" }}
      className="btn btn-outline-primary d-inline-block px-3 py-1 rounded-pill px-6 py-2 d-inline-block"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default Logout;
