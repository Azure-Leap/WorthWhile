import { Schema, model, Types } from "mongoose";

const ServiceSchema = new Schema({
  categoryId: { type: Types.ObjectId, ref: "Category" },
  serviceName: { type: String, required: true },
  servicePrice: { isMin: Boolean, price: Number },
  serviceImg: [String],
  description: String,
  duration: { type: Number, required: true },
  businessId: { type: Types.ObjectId, ref: "Business" },
});

const Service = model("Service", ServiceSchema);

export default Service;
