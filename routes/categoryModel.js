import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddlewar.js";
import {
  categoryController,
  delCategory,
  getCategory,
  getsingleCategory,
  updateCategory,
} from "../controllers/categoryController.js";
const router = express.Router();

router.post("/create-category", requireSignIn, isAdmin, categoryController);
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategory);
router.get("/all", getCategory);
router.get("/get/:slug", getsingleCategory);
router.delete("/delcategory/:id", requireSignIn, isAdmin, delCategory);
export default router;
