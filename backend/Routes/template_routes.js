const express = require("express");
const router = express.Router();

const {
  createTemplate,
} = require("../Controller/template_controller");

router.post("/create-template", createTemplate);

module.exports = router;