const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: "Unknown"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Quote", quoteSchema);