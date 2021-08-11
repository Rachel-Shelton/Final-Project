import React, { useContext, useState } from "react";
import styled from "styled-components";
import { PlantContext } from "./PlantContext";
import { UserContext } from "./UserContext";

import { Link } from "react-router-dom";

const Wishlist = () => {
  const { currentUser } = useContext(UserContext);
  const { wishlist } = useContext(PlantContext);

  // console.log(wishlist);

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

  console.log(currentUser);
  console.log("WP", wishlist);
  return (
    <>
      <Title>Your Wishlist</Title>
      {wishlist ? (
        wishlist.length > 0 ? (
          wishlist.map((plant) => {
            console.log(plant);
            return (
              <>
                <NavLink to={`/plant/${plant._id}`}>
                  <Entry>
                    <Img src={plant.image} />
                    <Name>{plant.commonName}</Name>
                    {/* <Date>Date added: </Date> */}
                  </Entry>
                </NavLink>
              </>
            );
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
  margin: 5px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;

const Entry = styled.div`
  margin: 5px 10px 5px 10px;
  padding: 5px;
  border: 1px solid black;
  display: flex;
`;

const Img = styled.img`
  height: 25px;
  margin-right: 5px;
`;

const Name = styled.div``;

const Date = styled.div``;

const Create = styled.button``;

export default Wishlist;
