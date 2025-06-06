const route = require("express").Router();
const prismaCLpostDB = require("../Connections/prisma.connect");

function generateAdminCode() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `PORT-FLICK${randomNumber}`;
}

exports.createAdmin = async (req, res) => {
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

