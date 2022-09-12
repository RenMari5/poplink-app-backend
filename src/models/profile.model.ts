import { model, Schema } from "mongoose";
import { Profile } from "../types/profile.types";

// 1. Setting up schema and data model for link collection

const profileSchema = new Schema<Profile>(
  {
    userId: { type: String, required: true },
    profileUsername: { type: String, required: true, unique: true },
    profileName: { type: String, required: true },
    profileDescription: { type: String },
    profilePhotoUrl: { type: String },
  },
  { timestamps: true }
);

// 2. Create the model from the Schema

export const profileModel = model<Profile>("Profile", profileSchema);
