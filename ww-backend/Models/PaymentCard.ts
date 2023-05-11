import mongoose, { Schema, model } from "mongoose";

const PaymentCardSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiredDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
});

const PaymentCard = model("PaymentCard", PaymentCardSchema);

export default PaymentCard;
