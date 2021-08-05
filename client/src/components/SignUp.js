import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
    console.log("filledForm", filledForm);
    setUserData({ ...filledForm });

    // const validationResult = Validate(filledForm);

    // if (validationResult) {
    //   setUserData({ ...filledForm });
    // } else {
    //   setFormErrors(validationResult);
    // }
  };
  console.log("userData2", userData);

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
        history.push("/");
      });
    }
  }, [userData]);

  return (
    <>
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
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 280px;
  background-color: grey;
`;

const Input = styled.input`
  margin-bottom: 5px;
`;

const Submit = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
`;
export default SignUp;
