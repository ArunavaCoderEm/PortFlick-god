const prismaCLpostDB = require("../Connections/prisma.connect");
const { z } = require("zod");

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
