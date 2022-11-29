import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadSpinner from "../../components/Utilities/LoadSpinner";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadSpinner></LoadSpinner>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
