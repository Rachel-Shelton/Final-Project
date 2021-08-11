import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GiFlowerPot } from "react-icons/gi";
import { PlantContext } from "./PlantContext";
import { UserContext } from "./UserContext";

const PlantDetails = () => {
  const { currentUser } = useContext(UserContext);
  const { wishlist, setWishlist } = useContext(PlantContext);
  const { _id } = useParams();
  // console.log(_id);

  const [chosenPlant, setChosenPlant] = useState(undefined);

  useEffect(() => {
    if (_id) {
      fetch(`/plant/${_id}`)
        .then((res) => res.json())
        .then(({ data }) => {
          // console.log("chosen", data);
          setChosenPlant(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [_id]);

  useEffect(() => {
    fetch(`/wishlist/${currentUser.data._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // plant: wishlist.commonName,
        // plant: chosenPlant.commonName,
      }),
    });
  }, [chosenPlant]);

  console.log(chosenPlant);
  console.log("Wishlist", wishlist);

  return chosenPlant ? (
    <>
      <Container>
        <Entry>
          <Save
            onClick={() => {
              console.log(chosenPlant);
              setWishlist(chosenPlant);
            }}
            role="radio"
          >
            <GiFlowerPot />
          </Save>
          <Top>
            <Image src={chosenPlant.image} />
            <Title>
              <Name>{chosenPlant.commonName}</Name>
              <BName> {chosenPlant.binomialName}</BName>
            </Title>
          </Top>
          <Details>
            <Origin>Origin: {chosenPlant.origin}</Origin>
            {/* <Pets>
            Pet-Friendly: {chosenPlant.petFriendly === false ? "false" : "true"}
          </Pets> */}
            <Care>Level of Care: {chosenPlant.care}</Care>
            <Water>Frequency of Watering: {chosenPlant.water}</Water>
            <Light>Amount of Light: {chosenPlant.light}</Light>
            <Medium>Growing Medium: {chosenPlant.growingMedium}</Medium>
            <Propagation>
              Propagation Methods: {chosenPlant.propogation}
            </Propagation>
            <Synonyms>Also Goes By: {chosenPlant.synonyms}</Synonyms>
          </Details>
        </Entry>
        <Suggestions>
          <Siblings>Similar to: {chosenPlant.siblings}</Siblings>
        </Suggestions>
      </Container>
    </>
  ) : (
    <Loading>Loading...</Loading>
  );
};

const Container = styled.div`
  min-height: 72vh;
`;

const Save = styled.div`
  margin-left: 90vw;
`;

const Loading = styled.div`
  margin-top: 5vh;
`;

const Entry = styled.div`
  position: relative;
  background-color: var(--primary-color);
  margin-top: 10vh;
  height: 300px;
  width: 95vw;
  cursor: pointer;
`;

const Top = styled.div`
  position: absolute;
  top: 0;
`;

const Image = styled.img`
  float: left;
  height: 150px;
  margin: 5px;
`;

const Title = styled.div`
  margin-top: 5px;
  /* background-color: blue; */
  width: 300px;
  margin-left: 160px;
`;

const Name = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: left;
  margin-left: 5px;
`;

const BName = styled.div`
  font-size: 16px;
  font-style: italic;
  display: flex;
  justify-content: left;
  margin-left: 50px;
`;

const Details = styled.div`
  margin-left: 5px;
  position: absolute;
  bottom: 0;
  height: 45%;
  width: 95vw;
  /* background-color: purple; */
`;

const Origin = styled.div``;

const Care = styled.div``;

const Water = styled.div``;

const Light = styled.div``;

const Medium = styled.div``;

const Propagation = styled.div``;

const Synonyms = styled.div``;

const Suggestions = styled.div`
  position: absolute;
  margin-top: 25px;
`;

const Siblings = styled.div``;

export default PlantDetails;
