const mongoose = require("mongoose");

const ClothingSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  size: String,
  type: String,
  imageUrl: String,
  condition: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Clothing", ClothingSchema);
