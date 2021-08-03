import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Community from "./Community";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import LandingPage from "./LandingPage";
import PlantDetails from "./PlantDetails";
import Plants from "./Plants";
import Feed from "./Feed";
import Profile from "./Profile";
import SignUp from "./SignUp";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
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
            <PlantDetails />
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
