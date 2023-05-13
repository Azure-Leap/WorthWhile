import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  profileImg: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  },
  phoneNumber: { type: String, required: true },
  favorites: [{ type: Types.ObjectId, ref: "Business", required: true }],
  giftCards: [Object],
  isVerify: { type: Boolean, default: false },
});

const User = model("User", UserSchema);

export default User;
