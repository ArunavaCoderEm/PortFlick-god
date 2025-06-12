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

const updateProjectSchema = z.object({
  projectId: z
    .string()
    .min(3, "Project ID too small")
    .max(30, "Project ID too large"),
  title: z.string().min(1).optional(),
  imageUrl: z.string().url("Invalid image URL").optional(),
  demoUrl: z.string().url("Invalid demo URL").optional(),
  desc: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  type: z.enum(["Personal", "SAAS"]).optional(),
  status: z.enum(["Active", "Pending", "Completed"]).optional(),
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

exports.updateProject = async (req, res) => {
  const parseResult = updateProjectSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const {
    projectId,
    title,
    imageUrl,
    demoUrl,
    desc,
    type,
    status,
    technologies,
  } = parseResult.data;

  try {
    const existing = await prismaCLpostDB.projects.findUnique({
      where: { projectId },
    });

    if (!existing) {
      return res.status(404).json({ message: "Project not found" });
    }

    const updatedProject = await prismaCLpostDB.projects.update({
      where: { projectId },
      data: {
        title,
        imageUrl,
        demoUrl,
        desc,
        type,
        status,
        technologies,
      },
    });

    res.status(200).json({ message: "Project Updated", updatedProject });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
