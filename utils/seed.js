const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userSeeds, thoughtSeeds } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Connected");

  const users = userSeeds;
  const thoughts = thoughtSeeds;

  // Add to collection and wait for results
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.log("\n Seeding Complete \n");
  process.exit(0);
});