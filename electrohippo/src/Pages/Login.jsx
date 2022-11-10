import React from 'react'
import { Box, Button, Container, Img, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
var database = JSON.parse(localStorage.getItem("userData")) || [];
  console.log(database)
function Login() {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const{LoginSuccess} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    checkFunc(logEmail, logPassword);
  };

  var flag = false;
  const checkFunc = (logEmail, logPassword) => {
    database.map((elem) => {
      // console.log(elem.email)
      if (elem.email === logEmail && elem.password === logPassword) {
        flag = true;
        LoginSuccess(elem.nickName)
     
      }
    });

    if (flag === true) {
      alert("success");
    } else {
      alert("unsuccess");
    }
  };

  return (
    <>
      <Container
        maxW="container.xl"
         height="550px"
    //  position="fixed"
    centerContent
        backgroundImage="//img.gkbcdn.com/bn/2207/roborockq7max-62d4c7422b40c92434e2fa93._p1_.jpg"
      >
        <Container maxW="md" bg="white" mt="50px"   >
          <Text fontWeight="bold" textAlign="start" p={4}>
            Sign In
          </Text>

          <Input
            placeholder="Email address"
            type="email"
            value={logEmail}
            onChange={(e) => setLogEmail(e.target.value)}
          />

          <br />
          <br />

          <Input
            p={5}
            placeholder="Password"
            type="password"
            value={logPassword}
            onChange={(e) => setLogPassword(e.target.value)}
          />
          <br />
          <br />
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            // border="1px solid red"
          >
          
            <label style={{ marginLeft: "220px", color: "grey" }}>
              <input type="checkbox" style={{ marginLeft: "-270px" }} />
              Keep me signed in
            </label>
            <Text color="grey">Forgot your password?</Text>
          </Box>
          <br />
          <br />
          <Button w="420px" bg="#0066FF" onClick={handleLogin}>
            submit
          </Button>
          <br />
          <br />
          <Link to="/regitration">
            <Button w="420px">Create a new account</Button>
          </Link>
          <br />
          <br />
          <p>--------------------------or--------------------------</p>

          <Button width="50px" height="50px" padding="0px" >
            <Img height="200px"
              src="https://static.nnnow.com/google-social-login.svg"
              onClick="https://www.google.co.in/" 
            /></Button>
        </Container>
      </Container>
      
    </>
  );
}

export default Login;
