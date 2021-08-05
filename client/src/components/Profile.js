import React from "react";
import styled from "styled-components";
import Progress from "./InProgress";

const Profile = () => {
  return (
    <>
      <Title>Profile</Title>
      <Progress />
    </>
  );
};

const Title = styled.div`
  margin-top: 5vh;
`;

export default Profile;
