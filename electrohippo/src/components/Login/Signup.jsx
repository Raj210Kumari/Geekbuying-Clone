import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";
import "./Signup.css";
//import "/node_modules/bootstrap/dist/css/bootstrap.css";

const Registration = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);

  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved in LS");
      setLogin(!login);
    }
  }
  function handleClick() {
    setLogin(!login);
  }

  return (
    <div className="box">
      <div className="outer">
        <div className="inner">
          {login ? (
            <form onSubmit={handleSubmit}>
              <h3>Create Your Account</h3>
              <div className="form-group">
                {/* <label>Name</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nick Name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <label>Email</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  placeholder=" Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <label>Phone number</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter mobile number"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <input type="checkbox" />
              <label>
                I agree to GeekBuying's Terms of Use & Privacy Policy.
              </label>
              <br />
              <button type="submit" className="s">
                Create Account
              </button>
              <p className="hint" onClick={handleClick}>
                Alread Registered login ?
              </p>

              {flag && (
                <Alert color="primary" variant="danger">
                  Please Fill Every Field
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
