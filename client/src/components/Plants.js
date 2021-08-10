import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Plants = () => {
  const [plants, setPlants] = useState(undefined);
  const [filter, setFilter] = useState(undefined);

  useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then(({ data }) => {
        // console.log(data);
        setPlants(data);
      });
  }, []);
  // console.log(plants);

  if (filter) {
    console.log("hello");
    setFilter(!filter);
    //how to style in here add cross in the corner or make border thicker
  }

  return plants ? (
    <>
      <Container>
        <Title>Find A Plant</Title>
        <Filter>
          <UList>
            <List
              onClick={() => {
                setFilter(true);
              }}
              role="radio"
            >
              Light
            </List>
            <List
              onClick={() => {
                setFilter(true);
              }}
              role="radio"
            >
              Water
            </List>
            <List
              onClick={() => {
                setFilter(true);
                // if(plant.petFriendly) {
                //   return plant
                // }
              }}
              role="radio"
            >
              Pet-Friendly
            </List>
            <List
              onClick={() => {
                setFilter(true);
              }}
              role="radio"
            >
              Care
            </List>
          </UList>
        </Filter>

        <Feed>
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
        </Feed>
      </Container>
    </>
  ) : (
    <div>Loading...</div>
  );
};

const Container = styled.div`
  margin: 5vh 2px 0px 5px;
  background-color: lightblue;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const Filter = styled.div`
  display: flex;
  margin-top: -25px;
`;

const UList = styled.ul`
  margin-bottom: 2px;
  display: flex;
  width: 100%;
`;

const List = styled.li`
  font-size: 12px;
  list-style: none;
  border: 1px solid black;
  display: flex;
  margin: 10px;
  flex-direction: row;
  padding: 1px 3px 1px 3px;
  /* background-color: orange; */
  cursor: pointer;
`;

const Feed = styled.div``;

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

const Name = styled.div`
  margin-top: 5px;
`;

const Origin = styled.div``;

export default Plants;
