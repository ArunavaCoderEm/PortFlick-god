const express = require("express");
const {
  createPortfolio,
  addProject,
  addExperience,
  addSkill,
  addTestimonial,
  addSocialLink,
  getPortfolioById
} = require("../Controller/portfolio_controller");

const router = express.Router();

router
  .post("/create-portfolio", createPortfolio)
  .get('/get-portfolio/:portfolioId', getPortfolioById)
  .post("/add-project", addProject)
  .post("/add-experience", addExperience)
  .post("/add-skill", addSkill)
  .post("/add-testimonial", addTestimonial)
  .post("/add-social", addSocialLink);

module.exports = router;
