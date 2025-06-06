const express = require("express");
const router = express.Router();

const {
  createAdmin,
} = require("../Controller/admin_controller");

router.post("/create", createAdmin);

module.exports = router;