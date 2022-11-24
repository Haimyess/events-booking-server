/** @format */

// express --> Node js framework used to handle HTTP methods.
const express = require("express");

// With adding "type" : "module" to the package.json, we can use import ... from...
// import express from 'express';
// ------------------------------------------
const dotenv = require("dotenv");
const cors = require("cors");

const events_router = require("./routes/Events");
const users_router = require("./routes/Users.js");
const purchase_router = require("./routes/Purchase.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// This is like body parser
app.use(express.json());

// post route
// Generate PDF
// send email

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, console.log(`Server listening on port ${PORT}`))

app.listen(process.env.PORT || 8080, () => {
  console.log(`listen on port ${process.env.PORT || 8080}`);
});

// app.get('/', (req,res) => res.send('Home'))
app.use("/api/events", events_router);

app.use("/api/users", users_router);
app.use("/api/purchase", purchase_router);
