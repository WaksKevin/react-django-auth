import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <Navigate to="/login" />
      ) : (
        <Routes>
          <Route {...rest}>{children}</Route>
        </Routes>
      )}
    </>
  );
};

export default PrivateRoute;
