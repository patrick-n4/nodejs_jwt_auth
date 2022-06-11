const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mern", () => {
      console.log("Database Connected");
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
