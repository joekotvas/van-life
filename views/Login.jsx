import React from "react";

import "../styles/Login.css";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="page login-page">
      <div className="row">
        <h1>Sign in to your account</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="inputs-container">
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                name="email"
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
                onChange={handleChange}
                value={loginFormData.password}
              />
            </label>
          </div>
          <button type="submit" className="button primary-button">
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
