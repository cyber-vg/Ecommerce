import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const categoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ msg: "Name is required" });
    }
    const existing = await categoryModel.findOne({ name });
    if (existing) {
      return res.status(200).send({ msg: "Category already there" });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res
      .status(201)
      .send({ sucess: true, msg: "new category created", category });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      error,
    });
  }
};
export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );
    res.status(200).send({
      sucess: true,
      msg: "Category updated",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      error,
    });
  }
};
export const getCategory = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      sucess: true,
      msg: "All categories are",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      error,
    });
  }
};

export const getsingleCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await categoryModel.findOne({ slug });
    res.status(200).send({
      sucess: true,
      msg: "Suceesful fetch",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: fail,
      error,
    });
  }
};
export const delCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      sucess: true,
      msg: "delete sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      error,
    });
  }
};
