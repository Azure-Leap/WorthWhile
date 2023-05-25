import mongoose, { Schema, model } from "mongoose";
import { IReview } from "../interfaces";

const ReviewSchema = new Schema(
  {
    appointmentId: {
      type: mongoose.Types.ObjectId,
      ref: "Appointment",
      unique: true,
    },
    rating: Number,
    text: String,
    reaction: { likedUsers: [String], unlikedUsers: [String] },
  },
  { timestamps: true }
);

const Review = model("Review", ReviewSchema);

export default Review;
