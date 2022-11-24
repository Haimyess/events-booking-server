/** @format */

// Post data to order table
// Post to ticket table
// We will have an order number
// Multiple tickets coming from the same order

// Example: i buy 3 tickets for the alice in wonderland escape room.
// I have one order number, because i paid for everything in one time,
// leaving all my personal info and payment method,
//  but 3 different ticket numbers for every each one of the tickets that i bought

const db = require("../database");

const allOrders = () => {
  return db("events").select("*").orderBy("event_date_start");
};

const order = (order) => {
  // It will contain the event object, the date and number of tickets

  console.log(order);
  return db("orders").insert(order).returning("*");
};

// const ticket = (userId) => {
//   return db("ticket").insert();
// };

// Post to the ticket table, the order_id and a unique id for every ticket withtin the order based on quantity.

module.exports = {
  order,
  allOrders,
};

// const getEvent = (event_name) => {
//   return (
//     db("events")
//       .select(
//         "events.event_id",
//         "events.event_name",
//         "events.event_info",
//         "events.event_type",
//         "events.event_subcategory",
//         "events.event_address",
//         "events.event_date_start",
//         "events.event_date_end",
//         "events.event_city",
//         "events.event_img",
//         "dates.event_day",
//         "dates.event_hour",
//         "price.event_price"
//         // "event_id",
//         // "event_name",
//         // "event_info",
//         // "event_type",
//         // "event_subcategory",
//         // "event_address",
//         // "events.event_date_start",
//         // "event_date_end",
//         // "event_city",
//         // "event_img"

//         // ======
//       )
//       .from("events")
//       .orderBy("dates.event_day")
//       .join("dates", "events.event_name", "=", "dates.event_name")
//       .join("price", "events.event_id", "=", "price.event_id")
//       // .where({ event_name: event_name });
//       .where({ "events.event_name": event_name })

//     // .where({ event_id: event_id })
//   );
// };
