import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    console.log(process.env.JWT_SECRET);
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;

    next();
  } catch (error) {
    console.log(error);
  }
};
export const getallUser = async (req, res) => {
  try {
    const aaluser = await userModel.find({});
    res.status(200).send({
      sucess: true,
      msg: "all user are",
      total: aaluser.length,
      users: aaluser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      error,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    console.log("Thus is user", user);
    if (user.role !== 1) {
      return res.status(404).send({
        msg: "not admin",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error, "##############################################");
    res.status(401).send({
      msg: "problem in admin middleware",
    });
  }
};
