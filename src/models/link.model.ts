import { model, Schema } from "mongoose";
import { Link } from "../types/link.types";

// 1. Setting up schema and data model for link collection

const linkSchema = new Schema<Link>(
  {
    userId: { type: String, required: true },
    profileId: { type: String, required: true },
    profileUsername: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
  // { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Alternative method for setting the createAt and updatedAt field names
);

// 2. Create the model from the Schema

export const linkModel = model<Link>("Link", linkSchema);
