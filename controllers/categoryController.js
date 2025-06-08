const Category = require("../models/categoryModel");
const addCategory = (req, res) => {
  const { title, image } = req.body;

  console.log(title, image);

  try {
    Category.findOne({ title: title }).then((result) => {
      if (result) {
        res.status(208).json({ message: "category name is already present" });
      } else {
        Category.insertOne({ title, image }).then((insertedCaterory) => {
          if (insertedCaterory) {
            res.status(200).json({ message: "category added" });
          } else {
            res.status(500).json({ message: "unable to add" });
          }
        });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

const updateCategory = (req, res) => {
  const id = req.params.id;
  const { title, image } = req.body;

  Category.findById({ _id: id }).then((result) => {
    if (result) {
      Category.findByIdAndUpdate(
        id,
        { $set: req.body }, // dynamically apply all fields
        { new: true, runValidators: true }
      ).then((result) => {
        if (result) {
          res.status(200).json({ message: "category updated" });
        }
      });
    }
  });
  //   res.status(200).json({ title, image });
};
const deleteCategory = (req, res) => {
  const { id } = req.params;
  try {
    Category.findOne({ _id: id }).then((result) => {
      if (result) {
        //delete category
        Category.findOneAndDelete({ _id: id }).then((result) => {
          if (result) {
            res.status(200).json({ message: "Category deleted" });
          }
        });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "internal error" });
  }
};

const getCategories = (req, res) => {
  try {
    Category.find({}).then((categories) => {
      if (categories) {
        res.status(200).json({ categories });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Internal error" });
  }
};

module.exports = {
  addCategory,
  updateCategory,
  getCategories,
  deleteCategory,
};
