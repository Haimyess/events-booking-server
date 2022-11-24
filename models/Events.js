/** @format */

const db = require("../database");

// Getting all the Events
const getAllEvents = () => {
  return db("events").select("*").orderBy("event_date_start");
};

// Getting a single Event
const getEvent = (event_name) => {
  return (
    db("events")
      .select(
        "events.event_id",
        "events.event_name",
        "events.event_info",
        "events.event_type",
        "events.event_subcategory",
        "events.event_address",
        "events.event_date_start",
        "events.event_date_end",
        "events.event_city",
        "events.event_img",
        "dates.event_day",
        "dates.event_hour",
        "price.event_price"
        // "event_id",
        // "event_name",
        // "event_info",
        // "event_type",
        // "event_subcategory",
        // "event_address",
        // "events.event_date_start",
        // "event_date_end",
        // "event_city",
        // "event_img"

        // ======
      )
      .from("events")
      .orderBy("dates.event_day")
      .join("dates", "events.event_name", "=", "dates.event_name")
      .join("price", "events.event_id", "=", "price.event_id")
      // .where({ event_name: event_name });
      .where({ "events.event_name": event_name })

    // .where({ event_id: event_id })
  );
};
// Get category
// const getCategory = (event_type) => {
//   return db("events").select("*").where({ event_type: event_type });
// };

const getCategory = (event_type) => {
  return db("events")
    .select(
      "events.event_id",
      "events.event_name",
      "events.event_info",
      "events.event_type",
      "events.event_subcategory",
      "events.event_address",
      "events.event_date_start",
      "events.event_date_end",
      "events.event_city",
      "events.event_img",
      "price.event_price",
      "dates.event_day",
      "dates.event_hour"
    )
    .from("events")
    .join("price", "events.event_id", "=", "price.event_id")
    .join("dates", "events.event_name", "=", "dates.event_name")
    .where({ "events.event_type": event_type });
};

// Search events
// Check this one out!!
const searchEvents = (query) => {
  return db("events")
    .select("*")
    .whereILike("event_name" || "event_info", `${query}%`);
};

// Search date
const searchDate = (date) => {
  return db("events").select("*").whereILike("event_name", `${date}%`);
};

// POST event

const addEvent = (event) => {
  return db("events").insert(event).returning("*");
};

module.exports = {
  getAllEvents,
  getEvent,
  getCategory,
  searchEvents,
  addEvent,
};
