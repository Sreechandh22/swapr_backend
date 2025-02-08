const express = require("express");
const { addClothing, getClothing } = require("../controllers/clothingController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/", authMiddleware, addClothing);
router.get("/", getClothing);

module.exports = router;
