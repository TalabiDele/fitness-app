import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "./Style";
import { Context, useAuth } from "../Context";

const Register = () => {
  const [countries, setCountries] = useState([]);
  const [isState, setIsState] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const { error, signup, loading } = useContext(Context);

  const currentUser = useAuth();

  useEffect(() => {
    getCountries();
  }, []);

  // Get countries from api
  const getCountries = async () => {
    const res = await axios.get(
      `https://countriesnow.space/api/v0.1/countries`
    );
    const countryList = res.data;
    setCountries(countryList.data);
  };

  //   Get all states from country selected
  const getStates = async (e) => {
    setCountry(e.target.value);

    const res = await axios.get(
      `https://countriesnow.space/api/v0.1/countries`
    );
    const countryList = res.data;

    // eslint-disable-next-line array-callback-return
    countryList.data.map((c) => {
      if (c.country === e.target.value) {
        setIsState(c.cities);
      }
    });
  };

  //   Signup user
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(country);
    console.log(state);

    await signup(email, password, name, country, state);

    if (currentUser) {
      console.log(currentUser.email);
    }
  };

  return (
    <Container>
      <h1>Welcome to Fitness App</h1>
      <form action="" onSubmit={handleSignup}>
        <p className="error">{error}</p>
        {currentUser && (
          <p>
            {currentUser.email} {currentUser.uid}
          </p>
        )}
        <label htmlFor="Name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="countries">Country of Residence</label>
        <select name="countries" id="countries" onChange={(e) => getStates(e)}>
          {countries.map((c) => (
            <option
              value={c.country}
              onClick={(e) => setCountry(e.target.value)}
            >
              {c.country}
            </option>
          ))}
        </select>
        <label htmlFor="state">State</label>
        <select
          name="state"
          id="state"
          onChange={(e) => setState(e.target.value)}
        >
          {isState.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>
        {loading ? (
          <button disabled className="disable">
            Sign up
          </button>
        ) : (
          <button>Sign up</button>
        )}

        <p>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </form>
    </Container>
  );
};

export default Register;
