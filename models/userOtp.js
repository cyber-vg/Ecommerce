
import mongoose from "mongoose";
import validator from "validator";
const userOtpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Not a valid Email");
          }
        }
      },
      otp:{
        type: String,
        required:true,
      }
});

//user otp model

export default mongoose.model("userotps",userOtpSchema);

