import React from "react";
import styled from "styled-components";
import { GiFlowerPot } from "react-icons/gi";

const Progress = () => {
  return (
    <>
      <Placeholder>
        <GiFlowerPot />
        &nbsp;This Page Is Under Construction&nbsp;
        <GiFlowerPot />
      </Placeholder>
    </>
  );
};

const Placeholder = styled.div`
  /* background-color: blue; */
  height: 75vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

export default Progress;
