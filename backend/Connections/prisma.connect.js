const { PrismaClient } = require("@prisma/client");

const prismaCLpostDB = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

module.exports = prismaCLpostDB;
