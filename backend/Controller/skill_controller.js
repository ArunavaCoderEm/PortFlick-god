const prismaCLpostDB = require("../Connections/prisma.connect");
const { z } = require("zod");

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