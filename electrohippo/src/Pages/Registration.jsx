import React from 'react'
import { Button, Container, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
 
var dataInLocal = JSON.parse(localStorage.getItem("userData")) || [];

function Regiter() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();

    var payload = {
      email: email,
      password: password,
      nickName:nickName
    };
    dataInLocal.push(payload);

    localStorage.setItem("userData", JSON.stringify(dataInLocal));
    alert("acount created successfully")
  };

  return (
    <>
      <Container
        maxW="container.xl"
        height="550px"
       
        centerContent
        backgroundImage="//img.gkbcdn.com/bn/2207/roborockq7max-62d4c7422b40c92434e2fa93._p1_.jpg"
      >
        <Container maxW="md" bg="white" mt="70px">
          <Text fontWeight="bold" textAlign="start" p={4}>
            Create your account
          </Text>

          <Input
            placeholder="Nick name"
            type="text"
            onChange={(e) => setNickName(e.target.value)}
          />
            <br />
            <br />   
          <Input
            placeholder="Email address"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <br />

          <Input
            p={5}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button w="420px" bg="#0066FF" onClick={handleSubmit}>
            Create account
          </Button>
          <br />
          <br />
          <Link to="/login">
            <Button w="420px">Go to login</Button>
          </Link>
          <br />
          <br />
        </Container>
      </Container>
    </>
  );
}

export default Regiter;
