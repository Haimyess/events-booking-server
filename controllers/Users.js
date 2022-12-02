/** @format */

const {
  addUser,
  getAllUsers,
  checkUser,
  editUser,
} = require("../models/Users.js");
// const bcrypt = require("bcrypt");
// Adding a user. REGISTRATION

// const _addUser = async (req, res) => {
//   try {
//     addUser(req.body);
//     const data = await res.json(data);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//     res.json({ msg: err.message });
//   }

//   console.log(req.body);
// };

const _addUser = (req, res) => {
  addUser(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
  console.log(req.body);
};

// Edit user PUT

const _editUser = (req, res) => {
  editUser(req.params.id, req.body)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
  // console.log(req.body);
  // console.log(req.params.id);
};

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

// const _checkUser = (req, res) => {
//   checkUser(req.body.email)
//     .then((data) => {
//       const match = bcrypt.compare(req.body.password, data[0].user_password);
//       console.log(match);
//       if (match) {
//         res.json(data);
//       }
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
// };

// Login --> Checking user existence

const _checkUser = (req, res) => {
  checkUser(req.body.user_email) //email --> model
    .then((data) => {
      // console.log("body", req.body.user_password);
      // console.log("body", typeof req.body.user_password);
      // console.log("database", data[0].user_password);

      // console.log("data", data);
      // console.log("body", req.body);
      res.json(data);
      // console.log(req.body);

      // const pass = req.body.user_password;
      // const exist = data.find((el) => el == pass);
      // console.log(exist);

      // if (data.includes(req.body.user_password)) {
      //   // res.json(data);
      //   console.log(data);
      // } else {
      //   console.log("not included");
      // }

      // =================
      // =================
      // if (data[0].user_password == req.body.user_password) {
      //   res.json(data);
      // } else {
      //   console.log("not equal");
      // }

      // =================
      // =================
      // =================
      // =================
      // } else {
      //   res.status(401).json({ errMsg: "incorrect email or  password" });

      // }

      //   if (data[0].user_email === req.body.user_email) {
      //     res.json(data);
      //   } else {
      //     res.status(401).json({ notexist: "User not exist" });
      //   }
    })
    .catch((err) => {
      console.log(err);
      // res.json({ notexist: "User not exist" });
      // res.json({ msg: err.message });
      res.json({ errMsg: "incorrect email or  password" });
    });
};

// const _checkUser = async (req, res) => {
//   try {
//     checkUser(req.body.user_email);

// console.log(req.body);
// const userPass =

// const data = await res.json(data);
// console.log(data);
// const data = await res.json(data);
// console.log(data);
// const { user_password, user_email } = req.body;

// const match = await bcrypt.compare(req.body.password, hashPassword);
// console.log(match);

// if (await bcrypt.compare(req.body.password, data[0].user_password)) {
//   if (match) {
//     await res.json(data);

//     console.log("true");
//   }
// }
// new
// console.log(data);
// } catch (err) {
//   console.log(err);
//   res.json({ msg: err.message });
// }

// console.log(req.body);
// };

module.exports = {
  _addUser,
  _getAllUsers,
  _checkUser,
  _editUser,
};
