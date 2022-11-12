import React, { useState } from "react";
import { Alert } from "react-bootstrap";
//import Home from './Home';
import { Link } from "react-router-dom";
import "./Signup.css";
//import "/node_modules/bootstrap/dist/css/bootstrap.css";
const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Sign In</h3>
        <div className="form-group">
          {/* <label>Email</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Email address"
            onChange={(event) => setEmaillog(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* <label>Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder=" Password"
            onChange={(event) => setPasswordlog(event.target.value)}
          />
          <br />

          {/* <input type="checkbox" />  
                 <label>Keep me Signed in </label><br/> */}
        </div>
        <Link to="/cart">
          <button type="submit" className="s">
            Login
          </button>
        </Link>
        {flag && (
          <Alert color="primary" variant="danger">
            Please Fill Correct Info
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Login;
