const express = require("express");
const {
  getDecks,
  getDeck,
  createDeck,
  deleteDeck,
  updateDeck,
} = require("../controllers/deckController");
const router = express.Router();

//GET all decks
router.get("/decks", getDecks);

//GET a single deck
router.get("/decks/:id", getDeck);

//CREATE a deck
router.post("/decks", createDeck);

//DELETE a deck
router.delete("/decks/:id", deleteDeck);

//UPDATE
router.patch("/decks/:id", updateDeck);

module.exports = router;
