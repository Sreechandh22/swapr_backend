const express = require("express");
const { createSubscription } = require("../controllers/paymentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/subscribe", authMiddleware, createSubscription);

module.exports = router;
