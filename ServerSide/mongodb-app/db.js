//this file handles the db connection

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    return client.db("blog_site");
  } catch (error) {
    console.error("Connection failed:", error);
    process.exit(1); // Exit process with failure
  }
}

connectDB();
module.exports = connectDB;
