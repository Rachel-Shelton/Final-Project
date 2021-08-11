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
          {/* <UList>
            <Label>
              <input
                onClick={() => {
                  setFilter(true);
                }}
                type="radio"
              />
              Light
            </Label>
            <Label>
              <input
                onClick={() => {
                  setFilter(true);
                }}
                type="radio"
              />
              Water
            </Label>
            <Label>
              <input
                onClick={() => {
                  setFilter(true);
                }}
                type="radio"
              />
              Pet-Friendly
            </Label>
            <Label>
              <input
                onClick={() => {
                  setFilter(true);
                }}
                type="radio"
              />
              Care
            </Label>
          </UList> */}
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
                  <ImgDiv>
                    <Image src={plant.image} />
                  </ImgDiv>
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
  margin: 0px 2px 0px 5px;
  background-color: var(--primary-color);
  width: 475px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const Filter = styled.div`
  display: flex;
  margin-top: -25px;
  margin-left: 70px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;

const Entry = styled.div`
  background-color: white;
  border: 1px solid var(--primary-color);
  margin: 5px 5px 5px 10px;
  height: 80px;
  width: 400px;
  cursor: pointer;
  display: flex;
`;

const ImgDiv = styled.div`
  width: 90px;
`;

const Image = styled.img`
  float: left;
  height: 60px;
  margin: 10px 5px 5px 5px;
`;

const Info = styled.div`
  width: 250px;
  margin-left: 20px;
`;

const Name = styled.div`
  margin-top: 18px;
`;

const Origin = styled.div``;

export default Plants;
