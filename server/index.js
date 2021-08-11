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
  addWishlist,
  getWishlist,
  updateWishlist,
} = require("./handlers.js");

const PORT = 4000;

express()
  .use(express.json())
  .use(morgan("dev"))

  //get all plants
  .get("/plants", getPlants)

  //get one plant
  .get("/plant/:_id", getPlant)

  // //Change plant info, with updateOne in the function
  // .patch("/plant/:_id", updatePlant)

  // get all users
  .get("/users", getUsers)

  //How to format the _id in the url?
  // get one user
  .get("/user/:_id", getUser)

  //add user
  .post("/user", addUser)

  //How to identify which field to change
  //Change user info, with updateOne in the function
  .patch("/user/:_id", updateUser)

  //Potential, retrieve posts for the feed
  .get("/posts", getPosts)

  //Potential, retrieve posts for the feed
  .get("/post/:_id", getPost)

  //add post to the db and feed
  .post("/post", addPost)

  //For validating the user's username and password on login
  .post("/user/login", Login)

  //To create a wishlist for the user in the database, if they don't have one
  .post("/wishlist", addWishlist)

  //To retrieve the user's wishlist
  .get("/wishlist/:userId", getWishlist)

  //To add plants to the user's wishlist (will eventually be able to remove them too)
  .patch("/wishlist/:userId", updateWishlist)

  .use("/assets", express.static(path.join(__dirname, "assets")))
  .listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
