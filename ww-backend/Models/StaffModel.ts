import { Schema, model, Types } from "mongoose";
import { IStaffer } from "../interfaces/index";

const StafferSchema = new Schema<IStaffer>({
  stafferName: { type: String, required: true },
  staffImg: String,
  businessId: { type: Types.ObjectId, ref: "Business", required: true },
  avialableTimes: [Date],
  about: String,
});

const Staffer = model("Staffer", StafferSchema);

export default Staffer;
