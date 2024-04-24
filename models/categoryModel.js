import mongoose from "mongoose";
import { isAdmin, requireSignIn } from "../middlewares/authmiddlewar.js";
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});
export default mongoose.model("Category", categorySchema);
