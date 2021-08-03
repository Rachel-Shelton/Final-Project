import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Community from "./Community";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import LandingPage from "./LandingPage";
import Plant from "./Plant";
import Plants from "./Plants";
import Feed from "./Feed";
import Profile from "./Profile";
import SignUp from "./SignUp";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/plants">
            <Plants />
          </Route>
          <Route path="/plant/:_id">
            <Plant />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
