import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
  imageUrl: String,
  category: String,
  sizes: Array,
  id: String,
});
