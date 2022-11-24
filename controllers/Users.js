/** @format */

const { addUser, getAllUsers, checkUser } = require("../models/Users.js");
const bcrypt = require("bcrypt");
// Adding a user. REGISTRATION

const _addUser = async (req, res) => {
  try {
    addUser(req.body);
    const data = await res.json(data);
  } catch (err) {
    res.json({ msg: err.message });
  }

  console.log(req.body);
};

// const _addUser = (req, res) => {
//   addUser(req.body)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
//   console.log(req.body);
// };

// Getting all users

const _getAllUsers = (req, res) => {
  getAllUsers()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};

// Login --> Checking user existence

const _checkUser = async (req, res) => {
  try {
    checkUser(req.body.email);
    // const { user_password, user_email } = req.body;
    if (await bcrypt.compare(req.body.password, data[0].user_password)) {
      const data = await res.json(data);
    }
  } catch (err) {
    res.json({ msg: err.message });
  }

  console.log(req.body);
};

// const _checkUser = (req, res) => {
//   checkUser(req.body.email).then((data) => {
//     if (data[0].user_password === req.body.password) {
//       console.log(data);
//       res.json(data);
//     }
//   });
// };

module.exports = {
  _addUser,
  _getAllUsers,
  _checkUser,
};
