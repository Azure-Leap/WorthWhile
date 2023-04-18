import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/index";

const UserSchema = new Schema<IUser>({
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

const User = model("User", UserSchema);

export default User;
