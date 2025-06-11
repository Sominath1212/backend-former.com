const productModel = require("../models/productModel");

const addProduct = (req, res) => {
  const { name, price, image, categoryId, stock, description, weight } =
    req.body;

  try {
    productModel.findOne({ name: name }).then((product) => {
      if (product) {
        res.status(208).json({ message: "Product is already present" });
      } else {
        productModel
          .insertOne({
            name,
            price,
            image,
            categoryId,
            stock,
            description,
            weight,
          })
          .then((insertedProduct) => {
            if (insertedProduct) {
              res.status(200).json({ message: "Product added successfully" });
            }
          });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw error;
  }
};
const updateProduct = (req, res) => {
  const productdata = req.body;
  const { id } = req.params;

  try {
    productModel.findOne({ _id: id }).then((product) => {
      if (product) {
        // update product
        productModel
          .updateOne({ _id: id }, { $set: productdata })
          .then((updatedProduct) => {
            if (updatedProduct) {
              res
                .status(200)
                .json({ message: "Product updated", updatedProduct });
            }
          });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw error;
  }
};
const deleteProduct = (req, res) => {
  const { id } = req.params;
  try {
    productModel.find({ _id: id }).then((product) => {
      if (product) {
        productModel.deleteOne({ _id: id }).then((updated) => {
          if (updated) {
            res.status(200).json({ message: "product deleted" });
          }
        });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw error;
  }
};
const getProducts = (req, res) => {
  try {
    productModel
      .find({})
      .populate("categoryId")
      .then((products) => {
        if (products.length !== 0) {
          res.status(200).json({ products });
        } else {
          res.status(200).json({ products });
        }
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw error;
  }
};
const getProduct = (req, res) => {
  const { id } = req.params;
  try {
    productModel
      .find({ _id: id })
      .populate("categoryId")
      .then((product) => {
        if (product) {
          res.status(200).json({ product });
        } else {
          res.status(404).json({ message: "product not found" });
        }
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw error;
  }
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProduct,
};
