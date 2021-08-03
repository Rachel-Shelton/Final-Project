import React from "react";

const { v4: uuidv4 } = require("uuid");

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  return <ItemContext.Provider value={{}}>{children}</ItemContext.Provider>;
};
