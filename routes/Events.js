/** @format */

const express = require("express");
const router = express.Router();

const {
  _getAllEvents,
  _getEvent,
  _getCategory,
  _searchEvents,
  _addEvent,
} = require("../controllers/Events");

router.get("/event/:name", _getEvent);
router.get("/all", _getAllEvents);
router.get("/category/:type", _getCategory);
router.get("/search", _searchEvents);
router.post("/add", _addEvent);

module.exports = router;
