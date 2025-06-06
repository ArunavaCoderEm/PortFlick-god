const express = require("express");
const {
  createUser,
  updateUser,
  getUser,
  fetchAllUsers,
} = require("../Controller/user_controller");

const router = express.Router();

router
  .post("/signup", createUser)
  .put("/update", updateUser)
  .get("/get-user/:id", getUser)
  .post("/fetch-all", fetchAllUsers);

module.exports = router;
