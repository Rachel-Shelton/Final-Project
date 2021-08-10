import React, { useContext, useState } from "react";
// import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";

import background from "../background.jpg";

const LandingPage = () => {
  const { users, setCurrentUser, currentUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // console.log(users);

  let findCurrentUser = users
    ? users.filter((user) => {
        // console.log(user.name);
        return (
          user.username.toLowerCase() === username.toLowerCase() &&
          user.password === password
        );
      })
    : [];
  console.log(findCurrentUser);

  let history = useHistory();

  let userProf = () => {
    if (findCurrentUser !== undefined) {
      setCurrentUser(findCurrentUser);
      console.log(currentUser);
      localStorage.setItem("loggedIn", username, password);
      return history.push("/home");
    } else {
      return alert("User Not Found");
    }
  };

  let validateUsername = () => {
    console.log(currentUser);
    if (currentUser) {
      if (currentUser.email && currentUser.username === username) {
        return true;
      } else {
        setError({ message: "Username Incorrect" });
        return false;
      }
    }
    return false;
  };

  let validatePassword = () => {
    if (currentUser) {
      if (currentUser.email && currentUser.password === password) {
        return true;
      } else {
        setError({ message: "Password Incorrect" });
        return false;
      }
    }
    return false;
  };

  return (
    <>
      <Container style={{ backgroundImage: `url(${background})` }}>
        <Center>
          <Welcome>Welcome to Plant Parenthood</Welcome>
          <Login>
            {error && <Error>{error.message}</Error>}
            <Username
              value={username}
              onChange={(ev) => {
                setUsername(ev.target.value);
              }}
              type="text"
              placeholder="Username"
            />
            <Password
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <Submit>
              {validateUsername() && validatePassword() ? (
                <Auth onClick={userProf}>Log In</Auth>
              ) : (
                <Auth isDisabled>Log In</Auth>
              )}
            </Submit>
          </Login>
          <Signup>
            <NoAcct>
              <strong>Don't have an account?</strong>
            </NoAcct>
            <Button>
              <Auth to="/signup">Sign Up! </Auth>
            </Button>
          </Signup>
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
  margin-top: 195px;
  margin-left: 425px;
  border: 1px solid white;
  padding: 3px;
`;

const Welcome = styled.h1`
  margin-top: 0px;
  color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Username = styled.input`
  margin-right: 5px;
`;

const Password = styled.input`
  margin-right: 5px;
`;

const Submit = styled.button`
  border-radius: 10px;
  border-color: var(--primary-color);
  background-color: white;
`;

const Signup = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`;
const NoAcct = styled.div`
  margin-right: 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  border-color: var(--primary-color);
  background-color: white;
`;

const Auth = styled(Link)`
  text-decoration: none;
  :visited {
    color: black;
  }
`;

const Error = styled.div`
  border-color: red;
`;

export default LandingPage;
