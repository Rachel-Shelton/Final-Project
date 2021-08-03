import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Plants = () => {
  const [plants, setPlants] = useState(undefined);

  useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then(({ data }) => {
        // console.log(data);
        setPlants(data);
      });
  }, []);
  // console.log(plants);

  return plants ? (
    <>
      <div>Plants</div>

      <div>
        {plants.map((plant) => {
          //console.log(plant);
          // console.log("image", plant.image);
          return (
            <NavLink to={`/plant/${plant._id}`}>
              <Entry>
                <Image src={plant.image} />
                <Info>
                  <Name>Name: {plant.commonName}</Name>
                  <Origin>Origin: {plant.origin}</Origin>
                </Info>
              </Entry>
            </NavLink>
          );
        })}
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;

const Entry = styled.div`
  border: 1px solid var(--primary-color);
  margin: 5px;
  height: 50px;
  cursor: pointer;
`;

const Image = styled.img`
  float: left;
  height: 35px;
  margin: 5px;
`;

const Info = styled.div`
  margin-left: 70px;
`;

const Name = styled.div``;

const Origin = styled.div``;

export default Plants;
