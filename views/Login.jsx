import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { loginUser } from "../api";

import "../styles/Login.css";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = React.useState({
    loading: false,
    error: null,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const { message } = location.state || { message: "" };

  async function checkUser(loginFormData) {
    setStatus({ loading: true, error: null });
    try {
      const res = await loginUser(loginFormData);
      console.log(res);
      navigate(location.state?.from || "/host", {
        replace: true,
      });
    } catch (err) {
      setStatus((prev) => ({ ...prev, error: err }));
    } finally {
      setStatus((prev) => ({ ...prev, loading: false }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkUser(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="login-page">
      <div className="row">
        {message && <p className="message">{message}</p>}
        <h1>Sign in to your account</h1>
        {status.error?.message && (
          <p className="login-error">{status.error.message}</p>
        )}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="inputs-container">
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="username"
                onChange={handleChange}
                value={loginFormData.email}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={loginFormData.password}
              />
            </label>
          </div>
          <button
            type="submit"
            className="button primary-button"
            disabled={status.loading}
          >
            {status.loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
