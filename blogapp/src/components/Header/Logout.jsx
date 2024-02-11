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
      className="btn btn-primary rounded-0 px-6 py-2 d-inline-block"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default Logout;
