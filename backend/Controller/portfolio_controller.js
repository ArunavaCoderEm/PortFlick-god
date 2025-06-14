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

const updatePortfolioSchema = z.object({
  portfolioId: z
    .string()
    .min(3, "Portfolio ID too small")
    .max(20, "Portfolio ID too large"),
  name: z.string().min(1, "Portfolio name is required").optional(),
  resume: z.string().optional(),
  displayPicture: z.string().url("Invalid display picture URL").optional(),
  description: z.string().optional(),
  education: z.string().optional(),
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
      return res
        .status(400)
        .json({ message: "Only 3 portfolios allowed in free tier" });
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
          push: portfolioId,
        },
      },
    });
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
    await prismaCLpostDB.portfolios.update({
      where: { portfolioId },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });
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

//update Portfolio

exports.updatePortfolio = async (req, res) => {
  const parseResult = updatePortfolioSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      error: parseResult.error.issues.map((issue) => issue.message),
    });
  }
  const { name, description, resume, displayPicture, education, portfolioId } =
    req.body;

  try {
    const existing = await prismaCLpostDB.portfolios.findUnique({
      where: { portfolioId },
    });
    if (!existing) {
      return res.status(409).json({ message: "Portfolio not found" });
    }

    const updatedPortfolio = await prismaCLpostDB.portfolios.update({
      where: { portfolioId },
      data: {
        name,
        description,
        resume,
        displayPicture,
        education,
      },
    });

    res.status(201).json({ message: "Portfolio Updated", updatedPortfolio });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//top portfolios
exports.getTopPortfolios = async (req, res) => {
  try {
    const topPortfolios = await prismaCLpostDB.portfolios.findMany({
      take: 5,
      orderBy: {
        viewCount: "desc",
      },
    });
    if (topPortfolios.length === 0) {
      return res.status(404).json({ message: "No portfolios found" });
    }
    res.status(200).json({ portfolios: topPortfolios });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Failed to fetch top portfolios" });
  }
};
