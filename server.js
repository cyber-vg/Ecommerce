import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import ConnectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryModel from "./routes/categoryModel.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();

ConnectDb();
const app = express();

//middle
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryModel);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log("server run");
});
