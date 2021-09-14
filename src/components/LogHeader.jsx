import React from "react";
import { Link } from "react-router-dom";

export default function LogHeader() {
  return (
    <header className="function-header">
      <h1 className="logo">Lang Learn</h1>
      <div className="nav-div">
        <p className="nav-item">
          <Link className="links" to="/signup">
            Register
          </Link>
        </p>
        <p className="nav-item">
          <Link className="links" to="/login">
            Sign-In
          </Link>
        </p>
      </div>
    </header>
  );
}
