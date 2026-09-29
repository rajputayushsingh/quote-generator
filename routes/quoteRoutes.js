const express = require("express");
const Quote = require("../models/Quote");

const router = express.Router();

router.get("/favorites", async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });

    res.json(quotes);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch favorites"
    });
  }
});

router.post("/favorites", async (req, res) => {
  try {
    const { quote, author } = req.body;

    if (!quote) {
      return res.status(400).json({
        message: "Quote is required"
      });
    }

    const newQuote = new Quote({
      quote,
      author
    });

    await newQuote.save();

    res.status(201).json(newQuote);
  } catch (error) {
    res.status(500).json({
      message: "Failed to save quote"
    });
  }
});

router.delete("/favorites/:id", async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);

    res.json({
      message: "Quote deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete quote"
    });
  }
});

module.exports = router;