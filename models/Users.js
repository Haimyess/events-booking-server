/** @format */

const db = require("../database");
const bcrypt = require("bcrypt");
// const { v4: uuidv4 } = require("uuid");

//GET:  Getting all the users
const getAllUsers = () => {
  return db("users").select("*").orderBy("user_name");
};

// POST: Adding a user
// We are getting the user and passing it to the addUser from the users controllers req,.body and adding it to the database here.
const addUser = async (user) => {
  const { user_id, user_name, user_email, user_password } = user;
  // --------------------------------------------------
  // Create an if statement that chacks If the user exists, send a message of user exists
  // --------------------------------------------------
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(user_password, salt);

  const userWithHashPass = {
    user_id: user_id,
    user_name: user_name,
    user_email: user_email,
    user_password: hashPassword,
  };
  // const salt
  // const hashedPassword = {};

  // const uniqueId = uuidv4();
  // req.body.user_password = uuidv4();

  //   const userId = uuidv4();
  //   const userWithId = { ...user, user_id: uuidv4() };

  // put it in the insert --> { ...user, user_idTest: uuidv4() }
  console.log(userWithHashPass);
  return db("users").insert(userWithHashPass).returning("*");
};

const checkUser = async (email) => {
  // const { user_email } = user;
  // const email = user_email;

  // console.log(user_email);
  // console.log(user_password);
  // const email = user_email;
  // const password = hashPassword;

  // const hashedPass = user_password;
  // maybe here i should do it
  console.log("success");

  return db("users")
    .select("user_email", "user_password", "user_name", "user_id")
    .where({ user_email: email });
};

module.exports = {
  addUser,
  getAllUsers,
  checkUser,
};
