"use strict";

const {v4: uuidv4} = require("uuid")

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
    console.log(plants);

    if (plants.length !== 0) {
 res.status(200).json({ status: 200, data: plants, message: "Plants Retrieved" });
    } else {
       res.status(404).json({ status: 200, data: plants, message: "No plants to retrieve" });
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
  const {commonName} = req.params;

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const plant = await db.collection("plants").findOne({ commonName: commonName });
    console.log(plant);
    if (plant !== undefined) {
res.status(200).json({ status: 200, data: plant, message: "Plant Retrieved" });
    } else {
      res.status(404).json({ status: 404, message: "Unable to retrieve plant" });
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

    res.status(200).json({ status: 200, data: users, message: "Users Retrieved" });
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

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const user = await db.collection("users").findOne({_id: ObjectId(req.params._id) });
  console.log("id", req.params._id)
    console.log(user);

     if (user !== undefined) {
res.status(200).json({ status: 200, data: user, message: "User Retrieved" });
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
  const _id = uuidv4()

  const { name, username, email, password, bio } = req.body;
  let newUser = {
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

    const users = await db.collection("users").updateOne({_id: ObjectId(req.params._id)});
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
    console.log(posts);

    res.status(200).json({ status: 200, data: posts });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const addPost = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = uuidv4()

  const { username, timestamp, likedBy, propagatedBy, status, media } = req.body;
  let newPost = {
    _id,
    username,
    timestamp, 
    likedBy, 
    propagatedBy, 
    status, 
    media 
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

module.exports = {
  getPlants,
  getPlant,
  // updatePlant,
  getUsers,
  getUser,
  addUser,
  updateUser,
  getPosts,
  addPost,
};
