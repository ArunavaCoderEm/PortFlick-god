const express = require("express");
const {
  createUser,
  updateUser,
  getUser,
  deleteUser,
} = require("../Controller/user_controller");

const router = express.Router();

router
  .post("/signup", createUser)
  .put("/update", updateUser)
  .get("/get/:id", getUser)
  .delete("/delete/:id", deleteUser);

module.exports = router;
