import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/index";

const UserSchema: Schema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: [true, "ene email burtgegdsen bn"],
  },
  password: String,
  profileImg: String,
  phoneNumber: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
