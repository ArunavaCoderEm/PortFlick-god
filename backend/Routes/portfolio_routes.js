const express = require("express");
const {
  createPortfolio,
  addProject,
  addExperience,
  addSkill,
  addTestimonial,
  addSocialLink,
} = require("../Controller/portfolio_controller");

const router = express.Router();

router
  .post("/create/:userclerkid", createPortfolio)
  .post("/addProject/:portfolioId", addProject)
  .post("/addExperience/:portfolioId", addExperience)
  .post("/addSkill/:portfolioId", addSkill)
  .post("/addTestimonial/:portfolioId", addTestimonial)
  .post("/addSocialLink/:portfolioId", addSocialLink);

module.exports = router;
