import { Schema, model, Types } from "mongoose";
import { IUser } from "../interfaces";

const UserSchema = new Schema<IUser>({});

const user = model("User", UserSchema);

export default user;
