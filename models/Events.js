/** @format */

const db = require("../database");

// Getting all the Events
const getAllEvents = () => {
  return db("allevents").select("*").orderBy("event_name");
};

// Tengo que recibir el id del producer que esta en otra tabla. En el url tengo el id y en la tabla de eventos tengo el nombre. Por cada nombre ver todos los eventos que ha creado.
const getEventsByProducer = (producer) => {
  // return db("allevents").select("*").where({ event_producer: producer });

  return (
    db("allevents")
      .select(
        "allevents.event_type",
        "allevents.event_subcategory",
        "allevents.event_name",
        "allevents.event_date_start",
        "allevents.event_date_end",
        "allevents.event_time",
        "allevents.event_info",
        "allevents.event_address",
        "allevents.event_city",
        "allevents.event_price",
        "allevents.event_id"
      )
      // .select("allevents.*")
      .from("allevents")
      // .orderBy("dates.event_day")
      .join("users", "allevents.event_producer", "=", "users.user_name")
      .where({ "users.user_id": producer })
  );
};

// Getting a single Event
const getEvent = (event_name) => {
  return db("allevents").select("*").where({ event_name: event_name });

  // db("events")
  //   .select(
  //     "events.event_id",
  //     "events.event_name",
  //     "events.event_info",
  //     "events.event_type",
  //     "events.event_subcategory",
  //     "events.event_address",
  //     "events.event_date_start",
  //     "events.event_date_end",
  //     "events.event_city",
  //     "events.event_img",
  //     "dates.event_day",
  //     "dates.event_hour",
  //     "price.event_price"

  //   )
  //   .from("events")
  //   .orderBy("dates.event_day")
  //   .join("dates", "events.event_name", "=", "dates.event_name")
  //   .join("price", "events.event_id", "=", "price.event_id")
  // .where({ "events.event_name": event_name })

  // .where({ event_id: event_id })
};
// Get category
// const getCategory = (event_type) => {
//   return db("events").select("*").where({ event_type: event_type });
// };

const getCategory = (event_type) => {
  return db("allevents").select("*").where({ event_type: event_type });
  // return db("events")
  //   .select(
  //     "events.event_id",
  //     "events.event_name",
  //     "events.event_info",
  //     "events.event_type",
  //     "events.event_subcategory",
  //     "events.event_address",
  //     "events.event_date_start",
  //     "events.event_date_end",
  //     "events.event_city",
  //     "events.event_img",
  //     "price.event_price",
  //     "dates.event_day",
  //     "dates.event_hour"
  //   )
  //   .from("events")
  //   .join("price", "events.event_id", "=", "price.event_id")
  //   .join("dates", "events.event_name", "=", "dates.event_name")
  //   .where({ "events.event_type": event_type });
};

// Search events
// Check this one out!!
const searchEvents = (query) => {
  return db("allevents")
    .select("*")
    .whereILike("event_name" || "event_info", `${query}%`);
};

// Search date
const searchDate = (date) => {
  return db("events").select("*").whereILike("event_name", `${date}%`);
};

// POST event

const addEvent = (event) => {
  return db("allevents").insert(event).returning("*");
};

module.exports = {
  getAllEvents,
  getEvent,
  getCategory,
  searchEvents,
  addEvent,
  getEventsByProducer,
};
