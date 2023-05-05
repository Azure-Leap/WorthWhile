import mongoose, { Schema, model } from "mongoose";
import { IGiftCard } from "../interfaces";

const GiftCardSchema = new Schema<IGiftCard>({
  businessId: {
    type: mongoose.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
});

const GiftCard = model("GiftCard", GiftCardSchema);

export default GiftCard;
