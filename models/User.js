const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profilePic: String,
  university: String,
  clothes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Clothing" }],
  isProUser: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
