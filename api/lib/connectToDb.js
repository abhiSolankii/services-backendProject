import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting database: ", error.message);
  }
};

export default connectToDb;
