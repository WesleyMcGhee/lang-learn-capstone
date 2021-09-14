import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="function-header">
      <h1 className="logo">Lang Learn</h1>
      <ul className="nav-div">
        <li className="nav-item">
          <Link className="links" to="/tips">
            Tips
          </Link>
        </li>
        <li className="nav-item">
          <Link className="links" to="/lessons">
            Lessons
          </Link>
        </li>

        <li className="nav-item">
          <Link className="links" to="/flashcards">
            Flashcards
          </Link>
        </li>
      </ul>
    </header>
  );
}
