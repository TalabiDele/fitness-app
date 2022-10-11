import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Style";
import { Context } from "../Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, login, loading } = useContext(Context);

  // Login User
  const handleLogin = async (e) => {
    e.preventDefault();

    // if (email === "" || password === "") {
    //   setIsError("Fill all fields..");

    //   setTimeout(() => {
    //     setIsError("");
    //   }, 4000);
    // }

    await login(email, password);
  };

  return (
    <Container>
      <h1>Sign in to Fitness App</h1>
      <p className="error">{error}</p>
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
        {loading ? (
          <button disabled className="disable">
            Sign up
          </button>
        ) : (
          <button>Sign in</button>
        )}
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </Container>
  );
};

export default Login;
