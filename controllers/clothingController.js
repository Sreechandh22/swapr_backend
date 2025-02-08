const Clothing = require("../models/Clothing");

exports.addClothing = async (req, res) => {
  const { name, size, type, condition, imageUrl } = req.body;
  const newClothing = await Clothing.create({ owner: req.user.userId, name, size, type, condition, imageUrl });
  res.status(201).json(newClothing);
};

exports.getClothing = async (req, res) => {
  const clothes = await Clothing.find().populate("owner", "name university");
  res.status(200).json(clothes);
};
