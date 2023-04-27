import { Schema, model, Types } from "mongoose";

const StafferSchema = new Schema({
  stafferName: { type: String, required: true },
  staffImg: String,
  businessId: { type: Types.ObjectId, ref: "Business", required: true },
  avialableTimes: [Date],
  about: String,
});

const Staffer = model("Staffer", StafferSchema);

export default Staffer;
