import React from "react";
import { Link } from "react-router-dom";
function footer() {
  return (
    <footer className="bg-dark text-light py-4">
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
    </footer>
  );
}

export default footer;
