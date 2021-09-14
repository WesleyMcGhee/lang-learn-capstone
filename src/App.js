import Signup from "./pages/Signup";
import React, { useState } from "react";
import Login from "./pages/login";
import LandingPage from "./pages/landingpage";
import LessonContent from "./pages/LessonContent";
import { Link, Route, Switch } from "react-router-dom";
import Lessons from "./pages/lessons";
import Tips from "./pages/Tips";
import Flashcards from "./pages/Flashcards";
import "./App.css";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}
function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {
  const token = getToken();
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} setToken={setToken} />}
        />
        <Route path="/signup" component={Signup} />
        <Route exact path="/lessons" component={Lessons} />
        <Route path="/lessons/:id" component={LessonContent} />
        <Route path="/tips" component={Tips} />
        <Route path="/flashcards" component={Flashcards} />
      </Switch>
    </div>
  );
}

export default App;
