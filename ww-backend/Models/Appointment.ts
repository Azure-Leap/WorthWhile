import mongoose, { Schema, model } from "mongoose";
import { IAppointment } from "../interfaces";

const AppointmentSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  businessId: {
    type: mongoose.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  stafferId: {
    type: mongoose.Types.ObjectId,
    ref: "Staffer",
    required: true,
  },
  totalPrice: Number,
  totalDuration: Number,
  startDate: Date,
  services: [Object],
  isReviewed: { type: Boolean, default: false },
  isFinished: { type: Boolean, default: false },
});

const Appointment = model("Appointment", AppointmentSchema);

export default Appointment;
