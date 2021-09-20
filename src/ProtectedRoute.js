import React from "react";
import { Route, Redirect } from "react-router";

export default function protectedRoute({
  isAuth: isAuth,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
        }
      }}
    />
  );
}
