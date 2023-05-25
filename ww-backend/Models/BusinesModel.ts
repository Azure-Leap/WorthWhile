import { Schema, model, Types } from "mongoose";

const BusinessSchema = new Schema(
  {
    businessName: { type: String, required: true },
    profileImg: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1595475884562-073c30d45670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    businessHours: [
      { name: String, startTime: String, endTime: String, isOpen: Boolean },
    ],
    address: {
      city: String,
      district: String,
      street: String,
      zipCode: Number,
    },
    description: String,
    socialMedia: [{ title: String, url: String, icon: String }],
  },
  { timestamps: true }
);

const Business = model("Business", BusinessSchema);

export default Business;
