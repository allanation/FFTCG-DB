const express = require("express");
const { getCards } = require("../controllers/cardController");
const router = express.Router();

//GET all cards
router.get("/cards", getCards);

module.exports = router;
