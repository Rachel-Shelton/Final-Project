import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation.js";
import Plants from "./Plants";
import Feed from "./Feed";

const Homepage = () => {
  return (
    <>
      {/* <NavBar>
        <Navigation />
      </NavBar> */}
      <Container>
        <PlantFeed>
          <Plants />
        </PlantFeed>
        <PostFeed>
          <Feed />
        </PostFeed>
      </Container>
    </>
  );
};

const NavBar = styled.div`
  background-color: yellow;
`;

const Container = styled.div`
  display: flex;
`;

const PlantFeed = styled.div`
  background-color: lightblue;
  width: 50vw;
  margin-right: 2px;
`;

const PostFeed = styled.div`
  background-color: grey;
  width: 50vw;
  margin-left: 2px;
`;

export default Homepage;
