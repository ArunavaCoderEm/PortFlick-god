const express = require("express");
const {
  createPortfolio,
  getPortfolioById,
  updatePortfolio
} = require("../Controller/portfolio_controller");

const {
  addProject,
  updateProject
} = require("../Controller/project_controller");

const {
  addSkill,
  updateSkill
} = require("../Controller/skill_controller");

const {
  addExperience,
  updateExperience
} = require("../Controller/experience_controller");


const {
  addTestimonial,
  updateTestimonial
} = require("../Controller/testimonial_controller");


const {
  addSocialLink,
  updateSocialLink
} = require("../Controller/sociallink_controller");


const router = express.Router();

router
  .post("/create", createPortfolio)
  .put("/update", updatePortfolio)
  .get('/get-portfolio/:portfolioId', getPortfolioById)
  .post("/add-project", addProject)
  .put("/update-project", updateProject)
  .post("/add-experience", addExperience)
  .put("/update-experience", updateExperience)
  .post("/add-skill", addSkill)
  .put("/update-skill", updateSkill)
  .post("/add-testimonial", addTestimonial)
  .put("/update-testimonial", updateTestimonial)
  .post("/add-social", addSocialLink)
  .put("/update-social", updateSocialLink)

  
module.exports = router;
