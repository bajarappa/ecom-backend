import mongoose from "mongoose";
import dotenv from "dotenv";

// Import dotenv to access the environment files
dotenv.config();

// Creating url for the mongodb Database stored in env file
const url = process.env.DB_URL;

// Function to connect to mongodb using mongoose
export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected using mongoose");
  } catch (err) {
    console.log("Error while connecting to DB");
    console.log(err);
  }
};
