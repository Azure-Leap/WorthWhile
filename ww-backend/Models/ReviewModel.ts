import mongoose, { Schema, model } from "mongoose";
import { IReview } from "../interfaces";

const ReviewSchema = new Schema<IReview>({
  appointmentId: {
    type: mongoose.Types.ObjectId,
    ref: "Appointment",
    required: true,
  },
  reviewDate: Date,
  rating: Number,
  text: String,
});

const Review = model("Review", ReviewSchema);

export default Review;
