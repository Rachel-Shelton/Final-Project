import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Plant = () => {
  const [plants, setPlants] = useState(undefined)

  useEffect(() => {
fetch("/plants")
.then((res)=> res.json())
.then((data) => (
  console.log(data),
  setPlants(data)
))
  }, [])
  console.log(plants)
  return (<div>Plants</div>);
};

export default Plant;
