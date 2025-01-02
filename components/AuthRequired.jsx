import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const authenticated = true;

  if (!authenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "Please log in to manage your account.",
        }}
      />
    );
  }

  return <Outlet />;
}