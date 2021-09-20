import Signup from "./pages/Signup";
import React from "react";
import Login from "./pages/login";
import LandingPage from "./pages/landingpage";
import LessonContent from "./pages/LessonContent";
import { Route, Switch } from "react-router-dom";
import Lessons from "./pages/lessons";
import Tips from "./pages/Tips";
import Flashcards from "./pages/Flashcards";
import FlashcardsCon from "./pages/FlashcardsCon";
import TipsContent from "./pages/TipsContent";
import ProtectedRoute from "./ProtectedRoute";
import Auth from "./auth";
import "./App.css";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

function App() {
  // const token = getToken();
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute
          exact
          path="/lessons"
          component={Lessons}
          isAuth={Auth.isAuth}
        />
        <Route path="/lessons/:id" component={LessonContent} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/flashcards" component={Flashcards} />
        <Route path="/flashcards/:id" component={FlashcardsCon} />
        <Route path="/tips/:id" component={TipsContent} />
      </Switch>
    </div>
  );
}

export default App;
