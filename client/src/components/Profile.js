import React, { useContext } from "react";
import styled from "styled-components";
import Progress from "./InProgress";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  console.log("CU", currentUser);

  return (
    <>
      <Title>Profile</Title>
      {currentUser ? (
        <>
          <Header>
            <div>{currentUser[0].name}</div>
            <div>{currentUser[0].email}</div>
          </Header>
          <Progress />
        </>
      ) : (
        <Progress />
      )}
    </>
  );
};

const Title = styled.div`
  margin-top: 5vh;
`;

const Header = styled.div``;

export default Profile;
