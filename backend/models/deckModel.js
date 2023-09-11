const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deckSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    cards: [
      {
        _id: String,
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Deck", deckSchema);
