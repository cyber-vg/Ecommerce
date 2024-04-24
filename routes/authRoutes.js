import express from "express";
import {
  registerController,
  userLogin,
  testController,
  userOtpSend,
} from "../controllers/authController.js";
const router = express.Router();
import {
  getallUser,
  isAdmin,
  requireSignIn,
} from "../middlewares/authmiddlewar.js";

router.post("/register", registerController);
//login
router.post("/user/sendotp", userOtpSend);
router.post("/user/login", userLogin);

router.get("/all", requireSignIn, isAdmin, getallUser);
//test
router.get("/test", requireSignIn, testController);

router.get("/userauth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get("/adminauth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
