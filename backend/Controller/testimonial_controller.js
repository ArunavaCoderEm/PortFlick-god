
const prismaCLpostDB = require("../Connections/prisma.connect");
const { z } = require("zod");

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