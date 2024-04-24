import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
userSchema.methods.generateAuthtoken = async function () {
  try {
    const newtoken = await jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    this.tokens = this.tokens.concat({ token: newtoken });
    await this.save();
    return { token: newtoken, userData: this };
  } catch (error) {
    return res.status(400).json({ msg: "NO token gentrate" }, error);
  }
};
export default mongoose.model("users", userSchema);
