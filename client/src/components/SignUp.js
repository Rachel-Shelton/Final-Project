import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import Validate from "./ValidateForm";

import background from "../background.jpg";

const SignUp = () => {
  let history = useHistory();
  const [userData, setUserData] = useState(undefined);

  const handleSubmit = (ev) => {
    const form = document.forms.signupForm.elements;
    // console.log(form);
    ev.preventDefault();

    let filledForm = {};
    for (let i = 0; i < form.length; i++) {
      let key = form[i].name;
      let value = form[i].value;
      // console.log("key", key);
      // console.log("value", value);
      filledForm[key] = value;
    }
    // console.log("filledForm", filledForm);
    setUserData({ ...filledForm });

    // const validationResult = Validate(filledForm);

    // if (validationResult) {
    //   setUserData({ ...filledForm });
    // } else {
    //   setFormErrors(validationResult);
    // }
  };
  // console.log("userData2", userData);

  useEffect(() => {
    if (userData) {
      fetch("/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userData.name,
          username: userData.username,
          email: userData.email,
          password: userData.password,
        }),
      }).then(() => {
        setUserData(undefined);
        history.push("/home");
      });
    }
  }, [userData]);

  return (
    <>
      <Container style={{ backgroundImage: `url(${background})` }}>
        <Center>
          <NewAcct>Create New Account</NewAcct>
          <Form id="signupForm">
            <Input name="name" placeholder="Full Name" type="text" />
            <Input name="username" placeholder="Username" type="text" />
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Password" type="password" />
            <Input
              name="ConfPassword"
              placeholder="Confirm Password"
              type="password"
            />
            <Submit onClick={handleSubmit}>Sign Up!</Submit>
          </Form>
        </Center>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 83vh;
  margin: -8px -5px 0px -5px;
`;

const Center = styled.div`
  background-color: black;
  width: 425px;
  position: fixed;
  margin-top: 175px;
  margin-left: 420px;
  border: 1px solid white;
  padding: 3px;
`;

const NewAcct = styled.h1`
  margin-top: 0px;
  /* background-color: white; */
  color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin-left: 70px;
  margin-top: -5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  justify-content: center;
  align-items: center;
  /*  position: absolute; 
  margin-top: 195px;
  margin-left: 545px;

  background-color: black;
  border: 1px solid white;
  padding: 15px; */
`;

const Input = styled.input`
  margin-bottom: 5px;
`;

const Submit = styled.button`
  background-color: pink;
  margin-top: 2px;
  width: 170px;
  color: black;
  border: none;
`;
export default SignUp;
