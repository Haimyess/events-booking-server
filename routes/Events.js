/** @format */

const express = require("express");
const router = express.Router();

const {
  _getAllEvents,
  _getEvent,
  _getCategory,
  _searchEvents,
  _addEvent,
  _getEventsByProducer,
  // _updateEvent,
} = require("../controllers/Events");

router.get("/event/:name", _getEvent);
router.get("/all", _getAllEvents);
router.get("/category/:type", _getCategory);
router.get("/search", _searchEvents);
router.get("/by/:producer", _getEventsByProducer);
router.post("/add", _addEvent);
// router.put("/update/:eventId", _updateEvent);
// router.delete("/delete/:eventId", _deleteEvent);

module.exports = router;
