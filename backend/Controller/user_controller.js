const route = require("express").Router();
const prismaCLpostDB = require("../Connections/prisma.connect");

// Create User
exports.createUser = async (req, res) => {
  const { email, phone, username, clerkid, avatar } = req.body;

  try {
    const userExists = await prismaCLpostDB.user.findUnique({
      where: { clerkid },
    });

    if (userExists) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const newUser = await prismaCLpostDB.user.create({
      data: { email, phone, avatar, clerkid, username },
      select: { email: true, username: true, phone: true },
    });

    res.status(200).json({ message: "User Created", user: newUser });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  const { email, phone, clerkid, avatar } = req.body;

  try {
    const userExists = await prismaCLpostDB.user.findUnique({
      where: { clerkid },
    });

    if (!userExists) {
      return res.status(400).json({ message: "No User Found" });
    }

    const updatedUser = await prismaCLpostDB.user.update({
      where: { clerkid },
      data: { email, phone, avatar },
      select: { email: true, phone: true },
    });

    res.status(200).json({ message: "User Updated", user: updatedUser });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get User
exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prismaCLpostDB.user.findFirst({
      where: { clerkid: id },
      include: { portfolioWeb: true },
    });

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    res.status(200).json({ message: "User Found", user });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const userExists = await prismaCLpostDB.user.findUnique({
      where: { clerkid: id },
    });

    if (!userExists) {
      return res.status(400).json({ message: "No User Found" });
    }

    await prismaCLpostDB.user.delete({ where: { clerkid: id } });

    res.status(200).json({ message: "User Deleted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
