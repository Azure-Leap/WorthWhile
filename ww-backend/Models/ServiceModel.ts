import { Schema, model, Types } from "mongoose";
import { IService } from "../interfaces/index";

const ServiceSchema = new Schema<IService>({
  categoryId: { type: Types.ObjectId, ref: "Category", required: true },
  serviceName: { type: String, required: true },
  servicePrice: { type: Number, required: true },
  serviceImg: [String],
  description: String,
  duration: { type: Number, required: true },
  businessId: { type: Types.ObjectId, ref: "Business", required: true },
});

const Service = model("Service", ServiceSchema);

export default Service;
