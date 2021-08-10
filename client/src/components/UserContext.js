import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    fetch("/user/login")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let userStorage = localStorage.getItem("loggedIn");
        if (userStorage) {
          if (data) {
            setCurrentUser(data);
          }
        }
      });
  }, []);

  console.log(currentUser);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
