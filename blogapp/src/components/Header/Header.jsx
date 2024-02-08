import React from "react";
import { Container } from "../container/Container";
import { Logo } from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "./Logout";
import { useSelector } from "react-redux";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-secondary">
      <Container>
        <nav className="d-flex">
          <div className="me-4">
            <Link to="/"></Link>
          </div>
          <ul className="d-flex ms-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="btn btn-outline-primary d-inline-block px-3 py-1 rounded-pill"
                    style={{ transition: "background-color 0.2s" }}
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus ? (
              <li>
                <Logout />
              </li>
            ) : null}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
