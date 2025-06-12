const prismaCLpostDB = require("../Connections/prisma.connect");
const { z } = require("zod");

const socialLinkSchema = z.object({
  socialId: z.string().min(3).max(30),
  platform: z.enum(["GitHub", "LinkedIn", "Twitter", "Instagram", "Facebook"]),
  url: z.string().url(),
  portfolioId: z
    .string()
    .min(3, "Portfolio ID too small")
    .max(20, "Portfolio ID too large"),
});


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
