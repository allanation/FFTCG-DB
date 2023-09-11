const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const router = express.Router();

//GET all users
router.get("/users", getUsers);

//GET a single user
router.get("/users/:id", getUser);

//Create a new user
router.post("/users", createUser);

//Delete a user
router.delete("/users/:id", deleteUser);

//update a user
router.patch("/users/:id", updateUser);

module.exports = router;
