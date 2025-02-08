const Chat = require("../models/Chat");

exports.sendMessage = async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;

    const newMessage = await Chat.create({ sender, receiver, message });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Message sending failed" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { user1, user2 } = req.query;

    const messages = await Chat.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 },
      ],
    }).sort({ timestamp: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to load messages" });
  }
};
