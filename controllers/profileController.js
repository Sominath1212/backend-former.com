const profileModel = require("../models/profileModel");

const getProfile = (req, res) => {
  const { id } = req.params;

  //   res.status(200).json("get route profile");
  try {
    profileModel
      .find({ userId: id })
      .populate("shippingAddress")
      .populate("billingAddress")
      .then((profile) => {
        if (profile) {
          res.status(200).json({ profile });
        }
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server Errorf" });
  }
};

const addProfile = (req, res) => {
  const profile = req.body;
  try {
    profileModel.insertOne({ profile }).then((createdProfile) => {
      if (createdProfile) {
        res.status(200).json("Profile updated successfully");
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server Errorf" });
  }
  //   res.status(200).json("add route profile");
};
const updateProfile = (req, res) => {
  const { id } = req.params;
  const profile = req.body;

  try {
    profileModel
      .findByIdAndUpdate({ userId: id }, { $set: profile })
      .then((updatedprofile) => {
        if (updatedprofile) {
          res.status(200).json({ message: "Profile Updated" });
        } else {
          res.status(404).json({ message: "profile not updated" });
        }
      });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
  //   res.status(200).json("update route profile");
};

const deleteProfile = (req, res) => {
  const { id } = req.params;

  try {
    profileModel.findByIdAndDelete({ userId: id }).then((deletedprofile) => {
      if (deletedprofile) {
        res.status(200).json({ message: "Profile deleted succefully" });
      } else {
        res.status(400).json({ message: "unable to delete profile" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }

  //   res.status(200).json("delete route profile");
};

module.exports = {
  deleteProfile,
  addProfile,
  updateProfile,
  getProfile,
};
