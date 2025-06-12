
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


const updateTestimonialSchema = z.object({
  testimonialId: z.string().min(3).max(30),
  name: z.string().min(1).optional(),
  message: z.string().min(1).optional(),
  position: z.string().optional(),
  avatar: z.string().url("Invalid avatar URL").optional(),
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


exports.updateTestimonial = async (req, res) => {
  const parseResult = updateTestimonialSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const { testimonialId, name, message, position, avatar } = parseResult.data;

  try {
    const existing = await prismaCLpostDB.testimonials.findUnique({
      where: { testimonialId },
    });

    if (!existing) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    const updatedTestimonial = await prismaCLpostDB.testimonials.update({
      where: { testimonialId },
      data: { name, message, position, avatar},
    });

    res.status(200).json({ message: "Testimonial Updated", updatedTestimonial });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
