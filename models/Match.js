const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
  user1: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  user2: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  clothing1: { type: mongoose.Schema.Types.ObjectId, ref: "Clothing" },
  clothing2: { type: mongoose.Schema.Types.ObjectId, ref: "Clothing" },
  status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
});

module.exports = mongoose.model("Match", MatchSchema);
