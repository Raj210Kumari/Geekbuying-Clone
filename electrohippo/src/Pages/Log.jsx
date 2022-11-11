import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "./loginUser";

const Log = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    loginUser({ email, password })
      .then((res) => {
        setIsAuth(true);
        setToken(res.data.token);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isAuth) {
    return (
        <Link to="/"></Link>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {isError && "Please Enter Correct Details"}
      <div>
        <label>
          Email:{" "}
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:{" "}
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export { Log };