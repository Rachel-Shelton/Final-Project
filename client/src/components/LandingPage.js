import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const LandingPage = () => {


  return (
  <>
    <Welcome>Welcome to Plant Parenthood</Welcome>
    <Login>
        <Username  placeholder="Username"></Username>
        <Password  placeholder="Password"></Password>
        <Submit>
          {/* {validUsername && validPassword ? (<Auth to="/">Log In</Auth>) : (
<Auth to="/" isDisabled>Log In</Auth>
          )} */}
          <Auth to="/">Log In</Auth>
          </Submit>
    </Login>
  <Signup>
    <div>Don't have an account?</div>
    <Button>
  <Auth to="/signup">Sign Up! </Auth>
  </Button>
  </Signup>

    </>);
};



const Welcome=styled.h1`
/* background-color:blue; */
`

const Login = styled.div`
/* background-color: red; */
`

const Username = styled.textarea``

const Password = styled.textarea``

const Submit = styled.button`
border-radius: 10px;
border-color: var(--primary-color);
background-color: white;
`

const Signup = styled.div``

const Button = styled.button`
border-radius: 10px;
border-color: var(--primary-color);
background-color: white;`

const Auth = styled(Link)`
text-decoration: none;
:visited{
  color: black;
}`


export default LandingPage;
