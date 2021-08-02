import { plants, posts } from "./toMongo";

const { MongoClient } = require("mongodb");
const assert = require("assert");
const fs = require("file-system");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const importingToMongo = () => {
  //do the language imports
  console.log(plants);
  console.log(posts);

  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  console.log("connected!");
  try {
    console.log();

    const db = client.db("PlantParenthood");

    await db.collection("posts").insertMany(posts);
    await db.collection("plants").insertMany(plants);

    console.log("Success!");
  } catch (err) {
    console.log(err.stack);
    console.log("Error");
  }

  client.close();
  console.log("disconnected!");
};
