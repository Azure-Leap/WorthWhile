import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  profileImg: { type: String, default: "" },
  phoneNumber: { type: String, required: true },
  favorites: [Object],
});

const User = model("User", UserSchema);

export default User;
