import { Schema, model, Types } from "mongoose";

const StafferSchema = new Schema({
  stafferName: { type: String, required: true },
  staffImg: { type: String, required: true },
  businessId: { type: Types.ObjectId, ref: "Business", required: true },
  about: String,
});

const Staffer = model("Staffer", StafferSchema);

export default Staffer;
