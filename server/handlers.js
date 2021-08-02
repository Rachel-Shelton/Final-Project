"use strict";

const { MongoClient } = require("mongodb");

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

    const plants = db.collection("plants").find().toArray();
    console.log(plants);

    res.status(200).json({ status: 200, data: plants });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }

  client.close();
  console.log("disconnected");
};

const getPlant = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const plant = db.collection("plants").find().toArray();
    console.log(plant);
    res.status(200).json({ status: 200, data: plant });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const updatePlant = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const plant = db.collection("plants").find().toArray();
    console.log(plant);
    res.status(200).json({ status: 200, data: plant });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const getUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const users = db.collection("users").find().toArray();
    console.log(users);

    res.status(200).json({ status: 200, data: users });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const user = db.collection("users").find().toArray();
    console.log(user);

    res.status(200).json({ status: 200, data: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
  console.log("disconnected");
};

const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const { name, username, email, password, bio } = req.body;
  let newUser = {
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

    const users = await db.collection("users").insertOne(newUser);
    console.log(users);
    res.status(200).json({ status: 200, data: newUser, message: "User Added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }

  client.close();
  console.log("disconnected");
};

const updateUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const { name, username, email, password, bio } = req.body;
  let updatedUser = {
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

    const users = db.collection("users").find().toArray();
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

    const posts = db.collection("feed").find().toArray();
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

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db("PlantParenthood");

    const post = db.collection("feed").find().toArray();
    console.log(post);

    res.status(200).json({ status: 200, data: post });
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
  updatePlant,
  getUsers,
  getUser,
  addUser,
  updateUser,
  getPosts,
  addPost,
};
