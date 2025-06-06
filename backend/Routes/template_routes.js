const express = require("express");
const router = express.Router();

const {
  createTemplate,
  updateTemplate
} = require("../Controller/template_controller");

router.post("/create-template", createTemplate);
router.put("/update-template", updateTemplate);
module.exports = router;