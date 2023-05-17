import mongoose, { Schema, model } from "mongoose";
import { IReview } from "../interfaces";

const ReviewSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  businessId: {
    type: mongoose.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  reviewDate: Date,
  rating: Number,
  text: String,
});

const Review = model("Review", ReviewSchema);

export default Review;
