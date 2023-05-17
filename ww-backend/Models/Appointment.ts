import mongoose, { Schema, model } from "mongoose";
import { IAppointment } from "../interfaces";

const AppointmentSchema = new Schema({
  services: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Service",
      required: true,
    },
  ],

  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalPrice: Number,
  totalDuration: Number,
  startDate: Date,
});

const Appointment: any = model("Appointment", AppointmentSchema);

export default Appointment;
