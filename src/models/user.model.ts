import { model, Schema } from "mongoose";
import { User } from "../types/user.types";

// 1. Setting up schema and data model for link collection

const userSchema = new Schema<User>(
  {
    uid: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    photoURL: { type: String },
  },
  { timestamps: true }
);

// 2. Create the model from the Schema

export const userModel = model<User>("Profile", userSchema);
