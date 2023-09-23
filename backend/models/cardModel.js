const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  _id: { type: String },
  element: { type: [String] },
  rarity: { type: String },
  cost: { type: Number },
  power: { type: Number },
  category_1: { type: String },
  category_2: { type: String },
  multicard: { type: Boolean },
  ex_burst: { type: Boolean },
  set: { type: String },
  name: { type: String },
  type: { type: String },
  job: { type: String },
  text: { type: String },
  images: {
    thumbs: [String],
    full: [String],
  },
});

module.exports = mongoose.model("Card", cardSchema);
