import mongoose from "mongoose";
import dummyData from "../../app/consts/dummyData";
import { VanModel } from "./van.model";

// Connect to MongoDB
async function connectToDb() {
  if (!process.env.MONGO_URL) {
    return console.log("No MONGO_URL");
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: "vans" });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process on connection failure
  }
}

// Insert van data
async function insertVans() {
  try {
    await VanModel.insertMany(dummyData);
    console.log("Van data inserted successfully!");
  } catch (error) {
    console.error("Error inserting van data:", error);
  }
}

(async () => {
  await connectToDb();
  await insertVans();
  mongoose.disconnect(); // Disconnect after operations
})();
