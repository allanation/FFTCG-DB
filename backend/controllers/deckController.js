const { default: mongoose } = require("mongoose");
const Deck = require("../models/deckModel");

//GET all decks
const getDecks = async (req, res) => {
  const decks = await Deck.find({}).sort({ createdAt: -1 });
  res.status(200).json(decks);
};

//GET a single deck
const getDeck = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const deck = await Deck.findById(id);

  if (!deck) {
    return res.status(404).json({ error: "No valid deck" });
  }

  res.status(200).json(deck);
};

//CREATE a new deck
const createDeck = async (req, res) => {
  const { name, cards } = req.body;

  try {
    const deck = await Deck.create({ name, cards });
    res.status(200).json(deck);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a deck
const deleteDeck = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const deck = await Deck.findOneAndDelete({ _id: id });

  if (!deck) {
    return res.status(404).json({ error: "No valid deck" });
  }

  res.status(200).json(deck);
};

//UPDATE a deck
const updateDeck = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const deck = await Deck.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!deck) {
    return res.status(404).json({ error: "No valid deck" });
  }

  res.status(200).json(deck);
};

module.exports = {
  getDecks,
  getDeck,
  createDeck,
  deleteDeck,
  updateDeck,
};
