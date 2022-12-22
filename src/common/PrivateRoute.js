import React from "react";
import Auth from "../Hooks/Auth";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...props }) => {
  const useAuth = Auth();
  return (
    <Route {...props}>{useAuth ? children : <Navigate to="/login" />}</Route>
  );
};

export default PrivateRoute;
