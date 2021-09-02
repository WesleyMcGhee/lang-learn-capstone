import React from "react";
import LogHeader from "../components/LogHeader";
export default function () {
  return (
    <div>
      <LogHeader />
      <section className="form-content">
        <h1 className="log-bannar">Sign-Up</h1>
        <form>
          <input type="email" placeholder="email" className="form-item"></input>
          <input
            type="text"
            placeholder="Username"
            className="form-item"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="form-item"
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-item"
          ></input>
          <input
            type="submit"
            text="Sign-Up"
            className="form-item form-btn"
          ></input>
        </form>
      </section>
    </div>
  );
}
