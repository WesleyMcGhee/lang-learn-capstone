import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LogHeader from "../components/LogHeader";

export default function Login(props) {
  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");
  // let [token, setToken] = useState();
  let userId = 0;
  function sendUser() {
    axios
      .post("http://localhost:5000/users/login", {
        username: user,
        password: pass,
      })
      .then((res) => {
        userId = res.data;
        props.setToken(res.data.token);
        props.history.push("/lessons");
        console.log(this);
        console.log(props);
      });
  }
  function handleUser(userInput) {
    setUser(userInput);
  }
  function handlePass(userInput) {
    setPass(userInput);
  }

  return (
    <div>
      <LogHeader />
      <section className="form-content">
        <h1 className="log-bannar">Sign-In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendUser();
          }}
        >
          <input
            type="text"
            placeholder="Username"
            className="form-item"
            onChange={(e) => {
              handleUser(e.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="form-item"
            onChange={(e) => {
              handlePass(e.target.value);
            }}
          ></input>
          <input type="submit" className="form-item form-btn"></input>
        </form>
      </section>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
