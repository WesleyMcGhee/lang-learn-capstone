import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function LandingPage() {
  return (
    <div>
      <header className="bannar">
        <h1 className="bannar-header">Lang Learn</h1>
        <p className="bannar-text">Lean your language through Imersion</p>
        <div className="btn-container">
          <NavLink className="nav-btn" to="/login">
            <button className="log-btn">Log-in</button>
          </NavLink>
          <NavLink className="nav-btn" to="/signup">
            <button className="log-btn">Sign-up</button>
          </NavLink>
        </div>
      </header>
    </div>
  );
}
