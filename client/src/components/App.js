import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
import Settings from "./Settings";
import PostDetails from "./PostDetails";
import NurseryFinder from "./NurseryFinder.js";
import { UserContext } from "./UserContext";
import Wishlist from "./Wishlist";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/nurseryFinder">
            <NurseryFinder />
          </Route>
          <div>
            {!currentUser && (
              <>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
              </>
            )}
            {currentUser && (
              <div>
                <Header />
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route path="/home">
                  <Homepage />
                </Route>
                <Route path="/feed">
                  <Feed />
                </Route>
                <Route path="/post/:_id">
                  <PostDetails />
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
                <Route path="/wishlist">
                  <Wishlist />
                </Route>
                <Route path="/community">
                  <Community />
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
              </div>
            )}

            <Footer />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
