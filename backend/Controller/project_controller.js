const prismaCLpostDB = require("../Connections/prisma.connect");
const { z } = require("zod");

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
