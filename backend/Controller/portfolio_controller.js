const prismaCLpostDB = require("../Connections/prisma.connect");
const { z } = require("zod");

const createPortfolioSchema = z.object({
  name: z.string().min(1, "Portfolio name is required"),
  templateId: z
    .string()
    .min(3, "Template ID too small")
    .max(20, "Template ID too large"),
  resume: z.string().optional(),
  displayPicture: z.string().url().optional(),
  description: z.string().optional(),
  education: z.string().optional(),
  portfolioId: z
    .string()
    .min(3, "Portfolio ID too small")
    .max(20, "Portfolio ID too large"),
});

const projectSchema = z.object({
  projectId: z
    .string()
    .min(3, "Portfolio ID too small")
    .max(30, "Portfolio ID too large"),
  title: z.string().min(1),
  imageUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  desc: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  type: z.enum(["Personal", "SAAS"]),
  status: z.enum(["Active", "Pending,", "Completed"]),
  portfolioId: z
    .string()
    .min(3, "Portfolio ID too small")
    .max(20, "Portfolio ID too large"),
});

const skillSchema = z.object({
  skillId: z.string().min(3).max(30),
  name: z.string().min(1),
  image: z.string().url(),
  description: z.string().optional(),
  proficiency: z.number().min(0).max(100).optional(),
  portfolioId: z
    .string()
    .min(3, "Portfolio ID too small")
    .max(20, "Portfolio ID too large"),
});

const experienceSchema = z.object({
  experienceId: z.string().min(3).max(30),
  companyName: z.string().min(1),
  jobType: z.enum(["FullTime", "PartTime", "Hybrid", "Intern"]),
  startDate: z.string().min(1),
  endDate: z.string().optional(),
  portfolioId: z
    .string()
    .min(3, "Portfolio ID too small")
    .max(20, "Portfolio ID too large"),
});

const testimonialSchema = z.object({
  testimonialId: z.string().min(3).max(30),
  name: z.string().min(1),
  message: z.string().min(1),
  position: z.string().optional(),
  avatar: z.string().url().optional(),
  portfolioId: z
    .string()
    .min(3, "Portfolio ID too small")
    .max(20, "Portfolio ID too large"),
});

const socialLinkSchema = z.object({
  socialId: z.string().min(3).max(30),
  platform: z.enum(["GitHub", "LinkedIn", "Twitter", "Instagram", "Facebook"]),
  url: z.string().url(),
  portfolioId: z
    .string()
    .min(3, "Portfolio ID too small")
    .max(20, "Portfolio ID too large"),
});

//Portfolio Creare
exports.createPortfolio = async (req, res) => {
  const parseResult = createPortfolioSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      error: parseResult.error.issues.map((issue) => issue.message),
    });
  }

  const {
    name,
    description,
    resume,
    displayPicture,
    templateId,
    username,
    education,
    portfolioId,
  } = req.body;

  try {
    const userExists = await prismaCLpostDB.user.findUnique({
      where: {
        username: username,

      },
    });
    if (!userExists) {
      return res.status(400).json({ message: "No User There" });
    }

    const existing = await prismaCLpostDB.portfolios.findUnique({
      where: { portfolioId },
    });
    if (existing) {
      return res.status(409).json({ message: "Portfololio ID already exists" });
    }

    const portfolioCount = await prismaCLpostDB.portfolios.count({
      where: { username },
    });

    if (portfolioCount >= 3) {
      return res.status(400).json({ message: "Only 3 portfolios allowed in free tier" });
    }

    const templateExists = await prismaCLpostDB.template.findUnique({
      where: { templateId: templateId },
    });
    if (!templateExists) {
      return res.status(400).json({ message: "Invalid Template ID" });
    }

    const portFolio = await prismaCLpostDB.portfolios.create({
      data: {
        name,
        resume,
        displayPicture,
        description,
        username,
        templateId,
        education,
        portfolioId,
      },
    });

    await prismaCLpostDB.user.update({
      where: { username },
      data: {
        createdPortfolios: {
          push: portfolioId
        }
      }
    })
    res
      .status(200)
      .json({ message: "Portfolio Created", Portfolio: portFolio });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

//view portfolio

exports.getPortfolioById = async (req, res) => {
  const { portfolioId } = req.params;

  try {
    const portfolio = await prismaCLpostDB.portfolios.findUnique({
      where: { portfolioId },
      include: {
        projects: true,
        experiences: true,
        skills: true,
        testimonials: true,
        sociallinks: true,
      },
    });

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    res.status(200).json({ portfolio });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//projects
exports.addProject = async (req, res) => {
  const parseResult = projectSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const {
    projectId,
    portfolioId,
    title,
    imageUrl,
    demoUrl,
    desc,
    type,
    status,
  } = req.body;
  try {
    const existing = await prismaCLpostDB.projects.findUnique({
      where: { projectId },
    });
    if (existing) {
      return res.status(409).json({ message: "Portfololio ID already exists" });
    }

    const portfolioExists = await prismaCLpostDB.portfolios.findUnique({
      where: { portfolioId: portfolioId },
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
        projectId,
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
  const parseResult = experienceSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const {
    experienceId,
    companyName,
    jobType,
    startDate,
    endDate = "Present",
    portfolioId,
  } = req.body;

  try {
    const portfolioExists = await prismaCLpostDB.portfolios.findUnique({
      where: { portfolioId },
    });
    if (!portfolioExists)
      return res.status(400).json({ message: "Portfolio Not Found" });

    const existing = await prismaCLpostDB.experience.findUnique({
      where: { experienceId },
    });
    if (existing)
      return res.status(409).json({ message: "Experience ID already exists" });

    const experience = await prismaCLpostDB.experience.create({
      data: {
        experienceId,
        companyName,
        jobType,
        startDate,
        endDate,
        portfolioId,
      },
    });

    res.status(200).json({ message: "Experience Added", experience });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//skill
exports.addSkill = async (req, res) => {
  const parseResult = skillSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const { skillId, name, image, description, proficiency, portfolioId } =
    req.body;

  try {
    const portfolioExists = await prismaCLpostDB.portfolios.findUnique({
      where: { portfolioId },
    });
    if (!portfolioExists)
      return res.status(400).json({ message: "Portfolio Not Found" });

    const existing = await prismaCLpostDB.skills.findUnique({
      where: { skillId },
    });
    if (existing)
      return res.status(409).json({ message: "Skill ID already exists" });

    const skill = await prismaCLpostDB.skills.create({
      data: {
        skillId,
        name,
        image,
        description,
        proficiency,
        portfolioId,
      },
    });

    res.status(200).json({ message: "Skill Added", skill });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//testimonials
exports.addTestimonial = async (req, res) => {
  const parseResult = testimonialSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const { testimonialId, name, message, position, avatar, portfolioId } =
    req.body;

  try {
    const portfolioExists = await prismaCLpostDB.portfolios.findUnique({
      where: { portfolioId },
    });
    if (!portfolioExists)
      return res.status(400).json({ message: "Portfolio Not Found" });

    const existing = await prismaCLpostDB.testimonials.findUnique({
      where: { testimonialId },
    });
    if (existing)
      return res.status(409).json({ message: "Testimonial ID already exists" });

    const testimonial = await prismaCLpostDB.testimonials.create({
      data: {
        testimonialId,
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
  const parseResult = socialLinkSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const { socialId, platform, url, portfolioId } = req.body;

  try {
    const portfolioExists = await prismaCLpostDB.portfolios.findUnique({
      where: { portfolioId },
    });
    if (!portfolioExists)
      return res.status(400).json({ message: "Portfolio Not Found" });

    const existing = await prismaCLpostDB.socialLinks.findUnique({
      where: { socialId },
    });
    if (existing)
      return res.status(409).json({ message: "Social Link ID already exists" });

    const link = await prismaCLpostDB.socialLinks.create({
      data: {
        socialId,
        platform,
        url,
        portfolioId,
      },
    });

    res.status(200).json({ message: "Social Link Added", socialLink: link });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
