import React, { useContext, useState } from "react";
import styled from "styled-components";
import { PlantContext } from "./PlantContext";
import { UserContext } from "./UserContext";

const Wishlist = () => {
  const { currentUser } = useContext(UserContext);
  const { wishlist } = useContext(PlantContext);
  console.log(wishlist);

  //fixed the problem with the below last time but won't work now
  //becuase I have no fetch to do

  // const [loading, setLoading] = useState(false);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const createList = () => {
    fetch("/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: currentUser.data._id,
        plants: [],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log("WP", wishlist);
  return (
    <>
      <Title>Your Wishlist</Title>
      {wishlist ? (
        wishlist > 0 ? (
          wishlist.map((plant) => {
            console.log(plant);
            return <div>{plant.commonName}</div>;
          })
        ) : (
          <div>Your Wishlist is Empty</div>
        )
      ) : (
        <Create onClick={createList}>Create Wishlist</Create>
      )}
    </>
  );
};

const Title = styled.div`
  margin-top: 5vh;
`;

const Create = styled.button``;

export default Wishlist;
