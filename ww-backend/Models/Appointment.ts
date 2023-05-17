import mongoose, { Schema, model } from "mongoose";
import { IAppointment } from "../interfaces";

const AppointmentSchema = new Schema<IAppointment>({
  services: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Service",
      required: true,
    },
  ],

  userId: {
    type: mongoose.Types.ObjectId,
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totaPrice: Number,
    startTime: Date,
  },
});

const Appointment: any = model("Appointment", AppointmentSchema);

export default Appointment;
