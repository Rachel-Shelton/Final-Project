const path = require("path");
const express = require("express");
const morgan = require("morgan");

const {
  getPlants,
  getPlant,
  updatePlant,
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

  //DONE
  //get all plants
  .get("/plants", getPlants)

  //DONE
  //console.log but item not found
  //get one plant
  .get("/plant/:commonName", getPlant)

  // //Change plant info, with updateOne in the function
  // .patch("/plant/:commonName", updatePlant)

  //DONE
  // get all users
  .get("/users", getUsers)

  //How to format the _id in the url?
  // get one user
  .get("/user/:_id", getUser)

  //DONE
  //add user
  .post("/user", addUser)

  //How to identify which field to change
  //Change user info, with updateOne in the function
  .patch("/user/:_id", updateUser)

  //DONE
  //Potential, retrieve posts for the feed
  .get("/posts", getPosts)

  //DONE
  //add post to the db and feed
  .post("/post", addPost)

  .listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
