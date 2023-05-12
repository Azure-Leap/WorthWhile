import mongoose, { Schema, model } from "mongoose";

const GiftCardSchema = new Schema({
  businessId: {
    type: mongoose.Types.ObjectId,
    ref: "Business",
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
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
  },
});

const GiftCard = model("GiftCard", GiftCardSchema);

export default GiftCard;
