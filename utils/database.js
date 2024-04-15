const mongoose = require("mongoose");
const config = require("./config");

const connectToDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(config.MONGODB_URI);
    
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}

module.exports = connectToDB;