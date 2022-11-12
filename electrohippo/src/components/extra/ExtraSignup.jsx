import React from "react";
import { Link } from "react-router-dom";
import "./extraSignup.css";
const ExtraSignup = () => {
  return (
    <div id="extraSignup">
      <label htmlFor="">Enter Username</label>
      <input type="email" name="" id="" />
      <br />

      <label htmlFor="">Enter Password</label>
      <input type="password" name="" id="" />
      <br />

      <div id="extraSignupCheck">
        <input type="checkbox" name="" id="" />
        <p>Keep me signed in</p> <ul>Forgot your password?</ul>
      </div>

      <Link to="/home">
        <button id="extraSignupButton">Login</button>
      </Link>

      <button>Create a new Account</button>
    </div>
  );
};

export default ExtraSignup;
