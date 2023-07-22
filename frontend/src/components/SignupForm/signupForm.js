import React, { useState } from "react";
import allCountriesArray from "./Country_list";
import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [timezone, setTimezone] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user/${username}`, {
      state: {
        username,
        email,
        password,
        timezone,
        country,
      },
    });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="timezone">Timezone:</label>
        <input
          type="text"
          id="timezone"
          value={timezone}
          onChange={(e) => {
            setTimezone(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <select
          name="count"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {allCountriesArray.map((country, index) => (
            <option
              value={country.name}
              key={index}
              onChange={(e) => setCountry(e.target.value)}
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" onChange={handleSubmit}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
