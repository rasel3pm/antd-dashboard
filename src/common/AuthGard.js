import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthGard = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default AuthGard;
