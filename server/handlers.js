"use strict";

const { v4: uuidv4 } = require("uuid");

const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
const assert = require("assert");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getPlants = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const plants = await await db.collection("plants").find().toArray();
    // console.log("***", plants, "***");

    if (plants.length !== 0) {
      res
        .status(200)
        .json({ status: 200, data: plants, message: "Plants Retrieved" });
    } else {
      res
        .status(404)
        .json({ status: 200, data: plants, message: "No plants to retrieve" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }

  client.close();
  console.log("disconnected");
};

const getPlant = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { _id } = req.params;

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const plant = await db.collection("plants").findOne({ _id });
    console.log(plant);
    if (plant !== undefined) {
      res
        .status(200)
        .json({ status: 200, data: plant, message: "Plant Retrieved" });
    } else {
      res
        .status(404)
        .json({ status: 404, message: "Unable to retrieve plant" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

// const updatePlant = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);
//   const {} = req.body

//   const plant = {}

//   try {
//     await client.connect();
//     console.log("connected!");

//     const db = client.db("PlantParenthood");

//     const updatedPlant = await db.collection("plants").findOne(_id: );
//     console.log(updatedPlant);
//     res.status(200).json({ status: 200, data: updatedPlant });
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ status: 500, message: err.message });
//   }
//   client.close();
//   console.log("disconnected");
// };

const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const users = await await db.collection("users").find().toArray();
    console.log(users);

    res
      .status(200)
      .json({ status: 200, data: users, message: "Users Retrieved" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

//404 error
const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { _id } = req.params;

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const user = await db.collection("users").findOne({ _id: parseInt(_id) });
    console.log("id", req.params._id);
    console.log(user);

    if (user !== undefined) {
      res
        .status(200)
        .json({ status: 200, data: user, message: "User Retrieved" });
    } else {
      res.status(404).json({ status: 404, message: "Unable to retrieve user" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = uuidv4();

  const { name, username, email, password } = req.body;
  let newUser = {
    _id,
    name,
    username,
    email,
    password,
  };

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const users = await await db.collection("users").insertOne(newUser);
    console.log(users);
    res.status(200).json({ status: 200, data: newUser, message: "User Added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }

  client.close();
  console.log("disconnected");
};

//How to format what will be changed (with if statements?)
const updateUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const { _id, name, username, email, password, bio } = req.body;
  let updatedUser = {
    _id,
    name,
    username,
    email,
    password,
    bio,
  };

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const users = await db
      .collection("users")
      .updateOne({ _id: parseInt(_id) });
    console.log(users);
    res.status(200).json({
      status: 200,
      data: updatedUser,
      message: "User information updated",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const getPosts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const posts = await db.collection("posts").find().toArray();
    // console.log(posts);

    res.status(200).json({ status: 200, data: posts });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const getPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { _id } = req.params;

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const post = await db.collection("posts").findOne({ _id });
    console.log(post);
    if (post !== undefined) {
      res
        .status(200)
        .json({ status: 200, data: post, message: "Post Retrieved" });
    } else {
      res.status(404).json({ status: 404, message: "Unable to retrieve post" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const addPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = uuidv4();

  const { username, timestamp, likedBy, propagatedBy, status, media } =
    req.body;
  let newPost = {
    _id,
    username,
    timestamp,
    likedBy,
    propagatedBy,
    status,
    media,
  };

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const post = await db.collection("posts").insertOne(newPost);
    console.log(post);

    res.status(200).json({ status: 200, data: req.body });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const Login = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  let givenUsername = req.body.username;
  let givenPassword = req.body.password;
  console.log(givenUsername, givenPassword);
  //get user from mdb using given username
  //look up user with given user name and compare given password to password in mdb
  //if (p=p, resmjson{data: user form db} else {message: "Wrong Password"} or "User not found")}
  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const cUser = await db
      .collection("users")
      .findOne({ username: givenUsername });
    console.log(cUser);

    if (givenUsername.toLowerCase() === cUser.username.toLowerCase()) {
      if (givenPassword === cUser.password) {
        res
          .status(200)
          .json({ status: 200, data: cUser, message: "User Logged In" });
      } else {
        res
          .status(404)
          .json({ status: 200, data: req.body, message: "Password Incorrect" });
      }
    } else {
      res.status(404).json({ status: 500, message: "Account Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const addWishlist = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = uuidv4();

  const { userId } = req.body;
  let newWishlist = {
    _id,
    userId,
    plants: [],
  };

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const wishlist = await db.collection("wishlists").insertOne(newWishlist);
    // console.log(wishlist);
    res
      .status(200)
      .json({ status: 200, data: newWishlist, message: "Wishlist Added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }

  client.close();
  console.log("disconnected");
};

const getWishlist = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId } = req.params;

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    console.log(userId);
    const wishlist = await db.collection("wishlists").findOne({ userId });

    console.log(wishlist);
    if (wishlist.plants.length > 0) {
      res
        .status(200)
        .json({ status: 200, data: wishlist, message: "Wishlist Retrieved" });
    } else {
      res
        .status(404)
        .json({ status: 404, message: "Unable to retrieve wishlist" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const updateWishlist = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId } = req.params;
  const { plant } = req.body;
  // console.log("***", req.body, "***");

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const wishlist = await db.collection("wishlists").findOne({ userId });
    ``;
    //  console.log(wishlist);
    if (wishlist !== undefined) {
      const updatedWishlist = await db
        .collection("wishlists")
        .updateOne({ userId }, { $push: { plants: plant } });
      res.status(200).json({
        status: 200,
        data: updatedWishlist,
        message: "Wishlist Updated",
      });
    } else {
      res
        .status(404)
        .json({ status: 404, message: "Unable to retrieve wishlist" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

module.exports = {
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
};
