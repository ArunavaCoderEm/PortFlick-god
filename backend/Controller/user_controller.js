const route = require("express").Router();
const prismaCLpostDB = require("../Connections/prisma.connect");
const { z } = require("zod");

const createUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\d{10}$/, "Invalid phone number"),
  username: z.string().min(3, "Username too small").max(20, "Username too large"),
  clerkid: z.string().min(1, "Clerk ID is required"),
  avatar: z.string().url().optional(),
});

const updateUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\d{10}$/, "Invalid phone number"),
  username: z.string().min(3, "Username too small").max(20, "Username too large"),
  avatar: z.string().url().optional(),
});

const getUserSchema = z.object({
  id: z.string().min(3, "Username too small").max(20, "Username too large"),
});


// Create User
exports.createUser = async (req, res) => {
  const parseResult = createUserSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      error: parseResult.error.issues.map((issue) => issue.message),
    });
  }
  const { email, phone, username, clerkid, avatar } = req.body;

  try {
    const userExists = await prismaCLpostDB.user.findUnique({
      where: { username },
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

  const parseResult = updateUserSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.issues.map(i => i.message) });
  }

  const { username, email, phone, avatar } = req.body;

  try {
    const userExists = await prismaCLpostDB.user.findUnique({
      where: { username },
    });

    if (!userExists) {
      return res.status(400).json({ message: "No User Found" });
    }

    const updatedUser = await prismaCLpostDB.user.update({
      where: { username },
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

  const parseResult = getUserSchema.safeParse(req.params);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.issues.map(i => i.message) });
  }

  const { id } = req.params;

  try {
    const user = await prismaCLpostDB.user.findFirst({
      where: { username: id },
      include: { userPortfolios: true },
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

// Get All Users
exports.fetchAllUsers = async (req, res) => {

  const { adminCode } = req.body;

  try {
    const admin = await prismaCLpostDB.admin.findUnique({
      where: { adminCode },
    });

    if (!admin) {
      return res.status(403).json({ message: "Invalid Admin Code" });
    }

    const users = await prismaCLpostDB.user.findMany({
    });

    res.status(200).json({ message: "Users Fetched", users });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Delete User
// exports.deleteUser = async (req, res) => {

//   const parseResult = deleteUserSchema.safeParse(req.params);
//   if (!parseResult.success) {
//     return res.status(400).json({ errors: parseResult.error.issues.map(i => i.message) });
//   }
//   const { id } = req.params;

//   try {
//     const userExists = await prismaCLpostDB.user.findUnique({
//       where: { clerkid: id },
//     });

//     if (!userExists) {
//       return res.status(400).json({ message: "No User Found" });
//     }

//     await prismaCLpostDB.user.delete({ where: { clerkid: id } });

//     res.status(200).json({ message: "User Deleted" });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
