import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/index";

const UserSchema: Schema = new Schema({
  userName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  profileImg: { type: String, default: "" },
  phoneNumber: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

export default User;
