import { Schema, model } from "mongoose";
import { ICategory } from "../interfaces/index";

const CategorySchema = new Schema<ICategory>({
  categoryTitle: { type: String, required: true },
  categoryImg: String,
  catType: {
    type: String,
    required: true,
    enum: ["Hair", "Nail", "Skin", "Makeup", "Tattoo", "Other"],
  },
});

const Category = model("Category", CategorySchema);

export default Category;
