import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PlantDetails = () => {
  const { _id } = useParams();
  console.log(_id);

  const [chosenPlant, setChosenPlant] = useState(undefined);

  useEffect(() => {
    if (_id) {
      fetch(`/plant/${_id}`)
        .then((res) => res.json())
        .then(({ data }) => {
          console.log("chosen", data);
          setChosenPlant(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [_id]);

  // console.log(chosenPlant);

  return chosenPlant ? (
    <>
      <Entry>
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
    </>
  ) : (
    <Loading>Loading...</Loading>
  );
};

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
  /* background-color: orange; */
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

// const Info = styled.div`
//   margin-left: 70px;
//   background-color: grey;
// `;

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

const Pets = styled.div``;

const Care = styled.div``;

const Water = styled.div``;

const Light = styled.div``;

const Medium = styled.div``;

const Propagation = styled.div``;

const Synonyms = styled.div``;

const Suggestions = styled.div`
  position: absolute;
  bottom: 50px;
`;

const Siblings = styled.div``;

export default PlantDetails;
