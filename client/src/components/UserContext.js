import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    let userStorage = localStorage.getItem("loggedIn");
    if (userStorage) {
      const foundStorage = JSON.parse(userStorage);

      fetch("/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: foundStorage.username,
          password: foundStorage.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentUser(data);
        });
    }
  }, []);

  // console.log(currentUser);

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
