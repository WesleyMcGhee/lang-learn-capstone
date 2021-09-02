import React from "react";
import LogHeader from "../components/LogHeader";
export default function Login() {
  return (
    <div>
      <LogHeader />
      <section className="form-content">
        <h1 className="log-bannar">Sign-In</h1>
        <form>
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
          <input type="submit" className="form-item form-btn"></input>
        </form>
      </section>
    </div>
  );
}
