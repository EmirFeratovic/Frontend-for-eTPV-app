import React from "react";
import { Redirect, Route } from "react-router";
const PrivateRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");
  return token ? <Route {...rest}>{children}</Route> : <Redirect to="/login" />;
};

export default PrivateRoute;
