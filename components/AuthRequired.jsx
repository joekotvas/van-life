import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const authenticated = true;
  const location = useLocation();

  if (!authenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "Please log in to manage your account.",
          from: location.pathname,
        }}
        replace
      />
    );
  }

  return <Outlet />;
}
