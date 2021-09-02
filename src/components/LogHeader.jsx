import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function LogHeader() {
  return (
    <header className="function-header">
      <h1 className="logo">Lang Learn</h1>
      <div className="nav-div">
        <p className="nav-item">Register</p>
        <p className="nav-item">Sign-In</p>
      </div>
    </header>
  );
}
