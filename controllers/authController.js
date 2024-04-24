import users from "../models/userModel.js";

import userotp from "../models/userOtp.js";
import nodemailer from "nodemailer";
import { comaprePass, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vaibhavgupta0141@gmail.com",
    pass: "urchfabgwsuopzkq",
  },
});

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      return res.send({ msg: "not in proper format" });
    }
    //cheack user
    const exsitUser = await users.findOne({ email });
    if (exsitUser) {
      return res.status(200).send({ msg: "Already Register" });
    }
    const hasedPassWord = await hashPassword(password);
    const user = await new users({
      name,
      email,
      phone,
      address,
      password: hasedPassWord,
    }).save();
    res.status(201).send({ msg: "user scucessfuly resisterd", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Error in register",
    });
  }
};
// export const loginController= async(req,res)=>{
//     try {
//         const {email,password}=req.body
//         if(!email||!password){
//             return res.send("both required")
//         }
//         const user = await userModel.findOne({email})
//         if(!user){
//             return res.send("user no found")
//         }
//         const match = await comaprePass(password, user.password)
//         if(!match){
//             return res.status(200).send("invalid password")
//         }
//    const token  = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
//     expiresIn:"1d",
//    })
//    res.status(200).send({
//     msg:"sucess",
//     user:{
//         name:user.name,
//         email:user.email,
//         phone:user.phone,
//         address:user.address
//     },token
//    })

//     } catch (error) {
//         console.log(error);
//     }
// }

export const testController = (req, res) => {
  console.log("hello");
  return res.send({ hello: "dd" });
};
export const userOtpSend = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Please Enter Your Mail" });
  }
  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      const OTP = Math.floor(100000 + Math.random() * 900000);

      const existEmail = await userotp.findOne({ email: email }); // this condition is to update the otp if the  user is already exist in Db then we upate the otp value respected to the same email id.

      if (existEmail) {
        //if user exits then we will update the otp
        const updateData = await userotp.findByIdAndUpdate(
          { _id: existEmail._id },
          {
            otp: OTP,
          },
          { new: true }
        ); // 1. _id ->we will get from database    2. _id -> this id will be of our existing email.

        await updateData.save();

        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "OTP Verification Mail",

          text: `Welcome to E-Kirana App, Hope you are doing well. Your Otp for validation is : ${OTP}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            return res.status(400).json({ error: "Email not sent" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      } else {
        //if it is new user then we will save the otp
        const saveOtpData = new userotp({
          email,
          otp: OTP,
        });
        await saveOtpData.save();

        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "OTP Verification Mail",
          text: `Welcome to E-Kirana App, Hope you are doing well. Your Otp for validation is : ${OTP}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "Email not sent" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Hello, Email sent Successfully" });
          }
        });
      }
    } else {
      res.status(400).json({ error: "This User Not Exists In Our DB." });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

//user Login
export const userLogin = async (req, res) => {
  const { email, otp } = req.body;

  if (!otp || !email) {
    return res.status(400).json({ error: "Please Enter Your OTP and Email" });
  }

  try {
    const otpverification = await userotp.findOne({ email: email });

    if (otpverification.otp === otp) {
      const preuser = await users.findOne({ email: email });

      //token generation
      const { token, userData } = await preuser.generateAuthtoken();

      res.status(200).json({
        message: "User Login Successfully !",

        userToken: token,
        email: email,
        userName: preuser.name,
        phone: preuser.phone,
        address: preuser.address,
        role: preuser.role,
      });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    console.log("hello", error);
    return res.status(400).json({ error: "Invalid Details", error });
  }
};
