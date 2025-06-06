const route = require("express").Router();
const prismaCLpostDB = require("../Connections/prisma.connect");
const { z } = require("zod");

const createTemplateSchema = z.object({
  name: z.string().min(3),
  templateId: z.string().min(3,"Template ID too small").max(20,"Template ID too large"),
  previewUrl: z.string().url().optional(),
  portfolioStyle: z.enum(["Minimalist", "Modern", "Creative", "Professional"], {
    errorMap: () => ({ message: "Invalid portfolio style" }),
  }),
  adminCode: z.string().min(1, "Admin code is required"),
});

// create template
exports.createTemplate = async (req, res) => {
  const parseResult = createTemplateSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      errors: parseResult.error.issues.map((i) => i.message),
    });
  }

  const { templateId, name, previewUrl, portfolioStyle, adminCode } = req.body;

  try {
    const isAdmin = await prismaCLpostDB.admin.findUnique({
      where: { adminCode },
    });
    if(!isAdmin) {
      return res.status(403).json({ message: "Invalid Admin Code" });
    }

    const existing = await prismaCLpostDB.template.findUnique({
      where: { templateId },
    });
    if(existing) {
      return res.status(409).json({ message: "Template ID already exists" });
    }

    const template = await prismaCLpostDB.template.create({
      data: {
        templateId,
        name,
        previewUrl,
        portfolioStyle,
      },
    });

    //no id returned(trying out)
    const { id, ...templateCreated } = template;

    res.status(201).json({ message: "Template Created", templateCreated });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
