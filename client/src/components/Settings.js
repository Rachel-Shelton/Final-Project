import React from "react";
import styled from "styled-components";
import Progress from "./InProgress";

const Settings = () => {
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
