import React from "react";
import styled from "styled-components";
import { BiTrafficCone } from "react-icons/bi";

const Progress = () => {
  return (
    <>
      <Placeholder>
        <BiTrafficCone />
        This Page Is Under Construction
        <BiTrafficCone />
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
