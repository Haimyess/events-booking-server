/** @format */

const express = require("express");
const router = express.Router();

const {
  _addUser,
  _getAllUsers,
  _checkUser,
} = require("../controllers/Users.js");

router.get("/", _getAllUsers);

// Register route
router.post("/register", _addUser);

// Login route
router.post("/login", _checkUser);

module.exports = router;
