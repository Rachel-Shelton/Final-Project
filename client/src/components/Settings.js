import React, { useContext } from "react";
import styled from "styled-components";
import Progress from "./InProgress";
import { UserContext } from "./UserContext";

const Settings = () => {
  const { currentUser } = useContext(UserContext);
  console.log("SCU", currentUser);

  return (
    <>
      <Title> Settings </Title>
      <div>
        <Progress />
      </div>
    </>
  );
};

const Title = styled.div`
  margin-top: 5vh;
`;

export default Settings;
