const path = require("path");
const express = require("express");
const morgan = require("morgan");

const {
  getPlants,
  getPlant,
  getUsers,
  getUser,
  addUser,
  updateUser,
  getPosts,
  addPost,
} = require("./handlers.js");

const PORT = 4000;

express()
  .use("/assets", express.static(path.join(__dirname, "assets")))
  .use(express.json())
  .use(morgan("dev"))

  //get all plants
  .get("/plants", getPlants)

  //get one plant
  .get("/plants/:_id", getPlant)

  //Change plant info, with updateOne in the function
  .patch("/plant/:_id", updateUser)

  // get all users
  .get("/users", getUsers)

  // get one user
  .get("/users/:_id", getUser)

  //DONE
  //add user
  .post("/user", addUser)

  //Change user info, with updateOne in the function
  .patch("/user/:_id", updateUser)

  //Potential, retrieve posts for the feed
  .get("/posts", getPosts)

  //add post to the db and feed
  .post("/post", addPost)

  .listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
