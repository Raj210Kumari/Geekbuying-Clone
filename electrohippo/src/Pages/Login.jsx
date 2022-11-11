import React, { useState } from "react";
import { Alert } from "react-bootstrap";
//import Home from './Home';
import { Link } from "react-router-dom";
import { Input,Container,Text,Box,Button,Img } from "@chakra-ui/react";
// import "./Signup.css";
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
      <Container
        maxW="container.xl"
         height="550px"
    //  position="fixed"
    centerContent
        backgroundImage="//img.gkbcdn.com/bn/2207/roborockq7max-62d4c7422b40c92434e2fa93._p1_.jpg"
      >
      <form onSubmit={handleLogin}>
      <Container maxW="md" bg="white" mt="50px"   >
          <Text fontWeight="bold" textAlign="start" p={4}>
            Sign In
          </Text>
        <div className="form-group">
          {/* <label>Email</label> */}
          <Input
            type="email"
            className="form-control"
            placeholder="Email address"
            onChange={(event) => setEmaillog(event.target.value)}
          />
        </div>
        <div className="form-group">
          <br />
          {/* <label>Password</label> */}
          <Input
            type="password"
            className="form-control"
            placeholder=" Password"
            onChange={(event) => setPasswordlog(event.target.value)}
          />
          <br />
          <br />

          {/* <input type="checkbox" />  
                 <label>Keep me Signed in </label><br/> */}
          
                 <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            // border="1px solid red"
          >
            {/* <Box border="2px solid green" width="60%" display="flex" ml="100px" >  */}
            <label style={{ marginLeft: "220px", color: "grey" }}>
              <input type="checkbox" style={{ marginLeft: "-220px" }} />
              Keep me signed in
            </label>
            {/* </Box>
          <Box>  */}
            <Text color="grey">Forgot your password?</Text>
            {/* </Box> */}
          </Box>
        </div>
          <br />
          <br />
        <Link to="/">
        <Button w="420px" bg="#0066FF" >
            submit
          </Button>
        </Link>
          <br />
          <br />
        <Link to="/registration">
            <Button w="420px">Create a new account</Button>
          </Link>
          <br />
          <br />
          <p>-------------------------------or-------------------------------</p>

          <Button marginLeft="180px" width="50px" height="50px" padding="0px" >
            <Img height="200px"
              src="https://static.nnnow.com/google-social-login.svg"
              onClick="https://www.google.co.in/" 
            /></Button>
      </Container>
      </form>
      </Container>
    </div>
  );
};

export default Login;