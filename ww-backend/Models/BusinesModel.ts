import { Schema, model, Types } from "mongoose";

const BusinessSchema = new Schema({
  businessName: { type: String, required: true },
  profileImg: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  businessImg: { type: String, required: true },
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
