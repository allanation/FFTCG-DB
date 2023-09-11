const { default: mongoose } = require("mongoose");
const Card = require("../models/cardModel");

//get all cards
const getCards = async (req, res) => {
  const cards = await Card.find({});
  res.status(200).json(cards);
};

module.exports = { getCards };
