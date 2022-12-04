/** @format */

const { createGlobalStyle } = require("styled-components");
const {
  getAllEvents,
  getEvent,
  getCategory,
  searchEvents,
  addEvent,
  getEventsByProducer,
} = require("../models/Events");

//CRUD
//READ - GET all Events
const _getAllEvents = (req, res) => {
  getAllEvents()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};
// READ - GET one Event
const _getEvent = (req, res) => {
  getEvent(req.params.name)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

// READ - GET all categories

const _getCategory = (req, res) => {
  getCategory(req.params.type)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

// READ - GET events. SEARCH QUERY
const _searchEvents = (req, res) => {
  console.log(req.query.q);
  searchEvents(req.query.q)
    .then((data) => {
      res.json(data);
      // console.log(req.query.q);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};
// READ - GET events. SEARCH DATE
const _searchDate = (req, res) => {
  console.log(req.query.date);
  searchDate(req.query.date)
    .then((data) => {
      res.json(data);
      // console.log(req.query.q);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

// POST - Add event
const _addEvent = (req, res) => {
  addEvent(req.body)
    .then((data) => {
      res.json(data);
      console.log(req.body);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

const _getEventsByProducer = (req, res) => {
  getEventsByProducer(req.params.producer)
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

// UPDATE EVENT

// const _updateEvent = (req, res) => {
//   _updateEvent(req.body, req.params.eventId)
//     .then((data) => {
//       res.json(data);
//       console.log(data);
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
// };

// // READ - GET Category (Specific page)
// const _getCategory = (req, res) => {
//   getEvent(req.params.type)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
// };

module.exports = {
  _getAllEvents,
  _getEvent,
  _getCategory,
  _searchEvents,
  _addEvent,
  _getEventsByProducer,
  // _updateEvent,
};
