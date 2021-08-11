import React, { useContext, useState, useEffect, createContext } from "react";
import { UserContext } from "./UserContext";

export const PlantContext = createContext(null);

export const PlantProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    // fetch(`/wishlist/${currentUser.data.username}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setWishlist(data);
    //   });
  }, [currentUser]);

  return (
    <PlantContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </PlantContext.Provider>
  );
};

//wishlist
//get
//{username, plants}
