import mongoose from "mongoose";

export const connectDB = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log("mongoDB holbogdloo");
  } catch (error) {
    console.log("mongoDB holbogdohod aldaa garlaa");
  }
};
