/** @format */

const express = require("express");
const router = express.Router();

const { _order, _allOrders, _ordersById } = require("../controllers/Purchase");

router.get("/all", _allOrders);
router.post("/", _order);
router.get("/:userId", _ordersById);

module.exports = router;
