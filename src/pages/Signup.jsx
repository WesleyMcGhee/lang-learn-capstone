import axios from "axios";
import React, { useState } from "react";
import LogHeader from "../components/LogHeader";
export default function () {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [conPass, setConPass] = useState("");
  const [email, setEmail] = useState("");

  function sendInfo() {
    if (password === conPass && password) {
      axios
        .post("http://localhost:5000/users/signup", {
          username,
          password,
          email,
        })
        .then((res) => {
          console.log(res.data);
        });
    } else {
      return "Error";
    }
  }
  function changeHandlepass(userInput) {
    setPassword(userInput);
  }
  function changeHandleconpass(userInput) {
    setConPass(userInput);
  }
  function changeHandleemail(userInput) {
    setEmail(userInput);
  }
  function changeHandleuser(userInput) {
    setUsername(userInput);
  }
  return (
    <div>
      <LogHeader />
      <section className="form-content">
        <h1 className="log-bannar">Sign-Up</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendInfo();
          }}
        >
          <input
            type="email"
            placeholder="email"
            className="form-item"
            onChange={(e) => changeHandleemail(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Username"
            className="form-item"
            onChange={(e) => changeHandleuser(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="form-item"
            onChange={(e) => changeHandlepass(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-item"
            onChange={(e) => changeHandleconpass(e.target.value)}
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
