const prismaCLpostDB = require("../Connections/prisma.connect");

//Portfolio Creare
exports.createPortfolio = async (req, res) => {
  const { userclerkid } = req.params;

  const { name, description, resume, template } = req.body;

  try {
    const userExists = await prismaCLpostDB.user.findUnique({
      where: {
        clerkid: userclerkid,
      },
    });

    if (!userExists) {
      res.status(400).json({ message: "No User There" });
    } else {
      const portFolio = await prismaCLpostDB.portfolios.create({
        data: {
          name,
          resume,
          description,
          userclerkid,
          template,
        },
      });
      res
        .status(200)
        .json({ message: "Portfolio Created", Portfolio: portFolio });
    }
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

//projects
exports.addProject = async (req, res) => {
  const { portfolioId } = req.params;
  const { title, imageUrl, demoUrl, desc, type, status } = req.body;

  try {
    const portfolioExists = await prismaCLpostDB.portfolios.findUnique({
      where: { id: portfolioId },
    });

    if (!portfolioExists) {
      return res.status(400).json({ message: "Portfolio Not Found" });
    }

    const project = await prismaCLpostDB.projects.create({
      data: {
        title,
        imageUrl,
        demoUrl,
        desc,
        type,
        status,
        portfolioId,
      },
    });

    res.status(200).json({ message: "Project Added", Project: project });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//experience
exports.addExperience = async (req, res) => {
  const { portfolioId } = req.params;
  const { companyName, jobType, startDate, endDate } = req.body;

  try {
    const portfolioExists = await prismaCLpostDB.portfolios.findUnique({
      where: { id: portfolioId },
    });

    if (!portfolioExists) {
      return res.status(400).json({ message: "Portfolio Not Found" });
    }

    const experience = await prismaCLpostDB.experience.create({
      data: {
        companyName,
        jobType,
        startDate,
        endDate,
        portfolioId,
      },
    });

    res
      .status(200)
      .json({ message: "Experience Added", Experience: experience });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

//skill
exports.addSkill = async (req, res) => {
  const { portfolioId } = req.params;
  const { name, image, description, proficiency } = req.body;

  try {
    const portfolioExists = await prismaCLpostDB.portfolio.findUnique({
      where: { id: portfolioId },
    });

    if (!portfolioExists) {
      return res.status(400).json({ message: "Portfolio Not Found" });
    }

    if (proficiency < 0 || proficiency > 100) {
      return res
        .status(400)
        .json({ message: "Enter proficiency between 0 and 100" });
    }

    const skill = await prismaCLpostDB.skill.create({
      data: {
        name,
        image,
        description,
        proficiency,
        portfolioId,
      },
    });

    res.status(200).json({ message: "Skill Added", Skill: skill });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

//testimonials
exports.addTestimonial = async (req, res) => {
  const { portfolioId } = req.params;
  const { name, message, position, avatar } = req.body;

  try {
    const portfolioExists = await prismaCLpostDB.portfolios.findUnique({
      where: { id: portfolioId },
    });

    if (!portfolioExists) {
      return res.status(400).json({ message: "Portfolio Not Found" });
    }

    const testimonial = await prismaCLpostDB.testimonials.create({
      data: {
        name,
        message,
        position,
        avatar,
        portfolioId,
      },
    });

    res.status(200).json({ message: "Testimonial Added", testimonial });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//social links
exports.addSocialLink = async (req, res) => {
  const { portfolioId } = req.params;
  const { platform, url } = req.body;

  try {
    const portfolioExists = await prismaCLpostDB.portfolios.findUnique({
      where: { id: portfolioId },
    });

    if (!portfolioExists) {
      return res.status(400).json({ message: "Portfolio Not Found" });
    }

    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?$"
    );
    if (!urlPattern.test(url)) {
      return res.status(400).json({ message: "Invalid URL format" });
    }

    const socialLink = await prismaCLpostDB.socialLinks.create({
      data: {
        platform,
        url,
        portfolioId,
      },
    });

    res.status(200).json({ message: "Social Link Added", socialLink });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
