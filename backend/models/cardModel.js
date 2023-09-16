const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  _id: { type: String },
  Element: { type: String },
  Rarity: { type: String },
  Cost: { type: String },
  Power: { type: String },
  Category_1: { type: String },
  Category_2: { type: String },
  Multicard: { type: Boolean },
  Ex_Burst: { type: Boolean },
  Set: { type: String },
  Name: { type: String },
  Type: { type: String },
  Job: { type: String },
  Text: { type: String },
  images: {
    thumbs: [String],
    full: [String],
  },
});

module.exports = mongoose.model("Card", cardSchema);
