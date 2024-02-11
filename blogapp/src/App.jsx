import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/footer/footer";
import authService from "./appwrite/auth";
import Logo from "./components/Logo";
function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .finally(() => setloading(false));
  });
  return !loading ? (
    <div className="min-vh-100 bg-light">
      <div className="w-full ">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div className="w-100">
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
