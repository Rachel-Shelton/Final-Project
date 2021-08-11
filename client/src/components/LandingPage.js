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

  // let findCurrentUser = users
  //   ? users.filter((user) => {
  //       // console.log(user.name);
  //       return (
  //         user.username.toLowerCase() === username.toLowerCase() &&
  //         user.password === password
  //       );
  //     })
  //   : [];
  // console.log(findCurrentUser);

  let history = useHistory();

  let userProf = () => {
    console.log();
    fetch("/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("loggedIn", JSON.stringify(data));
        // console.log(data);
        setCurrentUser(data);
        history.push("/home");
      });
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
                // console.log(ev.target.value, ev.target);
                setUsername(ev.target.value);
              }}
              type="text"
              placeholder="Username"
            />
            <Password
              value={password}
              onChange={(ev) => {
                // console.log(ev.target.value, ev.target);
                setPassword(ev.target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <Submit>
              {username.length > 1 && password.length > 1 ? (
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
