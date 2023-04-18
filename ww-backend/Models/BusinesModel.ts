import { Schema, model } from "mongoose";
import { IBusiness } from "../interfaces/index";

const BusinessSchema = new Schema<IBusiness>({
  businessName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  businessHours: [
    { day: Number, startTime: Number, endTime: Number, isRestDay: Boolean },
  ],
  address: {
    city: String,
    district: String,
    street: String,
    zipCode: Number,
  },
  description: String,
  socialMedia: [{ title: String, url: String, icon: String }],
});

const Business = model("Business", BusinessSchema);

export default Business;
