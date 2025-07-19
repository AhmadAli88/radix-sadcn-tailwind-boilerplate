import React from "react";
import { Navigate } from "react-router-dom";
import { PATH } from "../../../config";
import { ParentComponentWithSideBar } from "../../assets/genericComponents/ParentComponentWithSideBar";

function PrivateRoute({ children }) {
  const jwtToken = JSON.parse(localStorage.getItem("dummy_user"));
  console.log("jwtToken", jwtToken);
  if (jwtToken) {
    return <ParentComponentWithSideBar>{children}</ParentComponentWithSideBar>;
  } else {
    return <Navigate to={PATH.SIGN_IN} replace />;
  }
}

export default PrivateRoute;
