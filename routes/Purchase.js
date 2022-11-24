/** @format */

const express = require("express");
const router = express.Router();

const { _order, _allOrders } = require("../controllers/Purchase");

router.get("/all", _allOrders);
router.post("/", _order);

module.exports = router;
