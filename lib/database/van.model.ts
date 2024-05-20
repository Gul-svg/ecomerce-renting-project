import { Schema, model, models } from "mongoose";
// make the interface Ivan extends Document{}
export interface Ivan extends Document {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: "simple" | "rugged" | "luxury"; // Use a type union for valid van types
  hostId: string;
}

const vanSchema = new Schema<Ivan>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  type: { type: String, required: true, enum: ["simple", "rugged", "luxury"] }, // Use enum for validation
  hostId: { type: String, required: true },
});
// make it export const Van =models.Van ||  model<Van>("Van", vanSchema);
export const Van = models.Van || model<Ivan>("Van", vanSchema);
