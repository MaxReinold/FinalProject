import mongoose, { Schema, Document, Model } from "mongoose";

interface IItem extends Document {
  name: string;
  description?: string;
  pictures?: string[];
  price: number;
  updated_date: Date;
}

const itemSchema = new Schema<IItem>({
  name: { type: String, required: true },
  description: { type: String },
  pictures: { type: [String] },
  price: { type: Number, required: true },
  updated_date: { type: Date, default: Date.now },
});

const Item: Model<IItem> =
  mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;
