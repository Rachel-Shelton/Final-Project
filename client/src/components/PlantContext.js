import React, { useContext, useState, useEffect, createContext } from "react";
import { UserContext } from "./UserContext";

export const PlantContext = createContext(null);

export const PlantProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  const [wishlist, setWishlist] = useState({});
  const [updateList, setUpdateList] = useState(false);

  useEffect(() => {
    // console.log("Wish", wishlist);
    if (currentUser) {
      fetch(`/wishlist/${currentUser.data._id}`)
        .then((res) => res.json())
        .then(({ data }) => {
          console.log(data);
          console.log(data.plants);
          setWishlist(data.plants);
        });
    }
  }, [currentUser, updateList]);

  return (
    <PlantContext.Provider
      value={{ wishlist, setWishlist, updateList, setUpdateList }}
    >
      {children}
    </PlantContext.Provider>
  );
};

//wishlist
//get
//{username, plants}
