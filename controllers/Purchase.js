/** @format */

const { order, allOrders } = require("../models/Purchase");

const _allOrders = (req, res) => {
  allOrders()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

// -----------------------
// -------Generate PDF and send email

// PDF
// Make an object with the tickets numbers
/* 

const ticket = {
id: 
number: 
} */
const _order = (req, res) => {
  order(req.body)
    .then((data) => {
      res.json(data);
      // console.log(req.query.q);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

// --------------------------

module.exports = {
  _order,
  _allOrders,
};
