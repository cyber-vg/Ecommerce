import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddlewar.js";
import {
  createProductController,
  deleteProduct,
  getproduct,
  getsingleproduct,
  productFilter,
  productPhoto,
  realtedProduct,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
router.get("/get", getproduct);
router.get("/get-single/:pid", getsingleproduct);
router.get("/get-photo/:pid", productPhoto);
router.delete("/product/:pid", deleteProduct);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
router.post("/product-filters", productFilter);
router.get("/realted-product/:pid/:cid", realtedProduct);

export default router;
