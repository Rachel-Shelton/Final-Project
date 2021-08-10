const path = require("path");
const express = require("express");
const morgan = require("morgan");

const {
  getPlants,
  getPlant,
  // updatePlant,
  getUsers,
  getUser,
  addUser,
  updateUser,
  getPosts,
  getPost,
  addPost,
  Login,
} = require("./handlers.js");

const PORT = 4000;

express()
  .use(express.json())
  .use(morgan("dev"))

  //DONE
  //get all plants
  .get("/plants", getPlants)

  //DONE
  //get one plant
  .get("/plant/:_id", getPlant)

  // //Change plant info, with updateOne in the function
  // .patch("/plant/:_id", updatePlant)

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
  //Potential, retrieve posts for the feed
  .get("/post/:_id", getPost)

  //DONE
  //add post to the db and feed
  .post("/post", addPost)

  .post("/user/login", Login)

  .use("/assets", express.static(path.join(__dirname, "assets")))
  .listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
