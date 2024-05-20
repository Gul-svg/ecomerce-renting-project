import mongoose from "mongoose";

let isConnected = false;
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL) {
    return console.log("Missing MONGO_URL");
  }
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "vans",
    });
    console.log("mongo db is connected");
    isConnected = true;
  } catch (error) {
    console.log("Mongo Db connection failed", error);
    process.exit(1);
  }
};
