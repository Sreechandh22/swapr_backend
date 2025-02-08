const Match = require("../models/Match");
const Clothing = require("../models/Clothing");

exports.likeClothing = async (req, res) => {
  try {
    const { userId, clothingId } = req.body;
    const clothing = await Clothing.findById(clothingId);

    clothing.likes.push(userId);
    await clothing.save();

    // Check if the owner also liked the user's clothing
    const match = await Match.findOne({ user1: clothing.owner, user2: userId });

    if (match) {
      match.status = "accepted";
      await match.save();
      return res.status(200).json({ message: "Match successful!", match });
    }

    // Otherwise, create a new match entry
    const newMatch = await Match.create({
      user1: userId,
      user2: clothing.owner,
      clothing1: clothingId,
      status: "pending",
    });

    res.status(201).json(newMatch);
  } catch (error) {
    res.status(500).json({ error: "Like action failed" });
  }
};
