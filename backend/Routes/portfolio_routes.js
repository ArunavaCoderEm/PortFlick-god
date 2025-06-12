const express = require("express");
const {
  createPortfolio,
  getPortfolioById,
  updatePortfolio
} = require("../Controller/portfolio_controller");

const {
  addProject
} = require("../Controller/project_controller");

const {
  addSkill
} = require("../Controller/skill_controller");

const {
  addExperience
} = require("../Controller/experience_controller");


const {
  addTestimonial
} = require("../Controller/testimonial_controller");


const {
  addSocialLink
} = require("../Controller/sociallink_controller");


const router = express.Router();

router
  .post("/create", createPortfolio)
  .get('/get-portfolio/:portfolioId', getPortfolioById)
  .put("/update", updatePortfolio)
  .post("/add-project", addProject)
  .post("/add-experience", addExperience)
  .post("/add-skill", addSkill)
  .post("/add-testimonial", addTestimonial)
  .post("/add-social", addSocialLink);

  
module.exports = router;
