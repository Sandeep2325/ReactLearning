import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Footer Content</h5>
            <p>This is a basic example of a footer created with Bootstrap 5.</p>
          </div>
          <div className="col-md-6">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Container>
    </footer>
  );
}

export default Footer;
