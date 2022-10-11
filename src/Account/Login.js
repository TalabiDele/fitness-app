import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../firebase";
import { Container } from "./Style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Login User
  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Fill all fields..");

      setTimeout(() => {
        setError("");
      }, 4000);
    }

    await login(email, password);
  };

  return (
    <Container>
      <h1>Sign in to Fitness App</h1>
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </Container>
  );
};

export default Login;
