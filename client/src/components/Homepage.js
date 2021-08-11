import React from "react";
import styled from "styled-components";
// import Navigation from "./Navigation.js";
import Plants from "./Plants";
import Feed from "./Feed";

import background from "../background.jpg";

const Homepage = () => {
  return (
    <>
      {/* <NavBar>
        <Navigation />
      </NavBar> */}
      <Container style={{ backgroundImage: `url(${background})` }}>
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

// const NavBar = styled.div`
//   background-color: yellow;
// `;

const Container = styled.div`
  margin-top: 30px;
  display: flex;
`;

const PlantFeed = styled.div`
  width: 50vw;
  margin-left: 65px;
  margin-bottom: 25px;
`;

const PostFeed = styled.div`
  width: 50vw;
  margin-bottom: 0px;
`;

export default Homepage;
