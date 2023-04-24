import mongoose, { Schema, model } from "mongoose";
import { IReply } from "../interfaces";

const ReplySchema = new Schema<IReply>({
  reviewId: {
    type: mongoose.Types.ObjectId,
    ref: "Review",
    required: true,
  },
  replyDate: Date,
  text: String,
});

const Reply = model("Reply", ReplySchema);

export default Reply;
