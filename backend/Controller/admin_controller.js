const route = require("express").Router();
const prismaCLpostDB = require("../Connections/prisma.connect");
const { z } = require("zod");

// Zod
const adminSchema = z.object({
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\d{10}$/, "Invalid phone number format"),
  code: z.literal("PORTFLICK-ADMIN"),
});

function generateAdminCode() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `PORT-FLICK${randomNumber}`;
}

exports.createAdmin = async (req, res) => {
  const parseResult = adminSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      error: parseResult.error.issues.map((issue) => issue.message),
    });
  }
  const { email, phone, code } = req.body;

  if (code !== "PORTFLICK-ADMIN") {
    return res.status(403).json({ error: "Invalid admin access" });
  }

  try {
    const existingAdmin = await prismaCLpostDB.admin.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    if (existingAdmin) {
      return res.status(409).json({ error: "Email or phone already exists" });
    }

    const adminCode = generateAdminCode();

    const newAdmin = await prismaCLpostDB.admin.create({
      data: {
        email,
        phone,
        adminCode,
      },
    });

    return res.status(201).json({
      message: "Admin created successfully",
      adminCode: newAdmin.adminCode,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
