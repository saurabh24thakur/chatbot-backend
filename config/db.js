


import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // load environment variables

const mongo_url = process.env.MONGO_URL;
console.log("Mongo URL:", mongo_url); // ✅ will now show the correct value

const connectdb = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log("✅ DB is connected");
  } catch (e) {
    console.log("❌ Error occurred during DB connection:", e.message);
  }
};

export default connectdb;
