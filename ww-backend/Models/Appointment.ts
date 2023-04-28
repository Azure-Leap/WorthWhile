import mongoose, { Schema, model } from "mongoose";
import { IAppointment } from "../interfaces";

const AppointmentSchema = new Schema<IAppointment>({
  services: [
    {
      serverId: {
        type: mongoose.Types.ObjectId,
        ref: "Services",
        required: true,
      },
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

const Appointment = model("Appointment", AppointmentSchema);

export default Appointment;
