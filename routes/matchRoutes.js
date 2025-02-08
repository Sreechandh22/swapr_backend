const express = require("express");
const { likeClothing } = require("../controllers/matchController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/like", authMiddleware, likeClothing);

module.exports = router;
