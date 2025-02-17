/*
  Warnings:

  - You are about to drop the `usersDemo` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TypeProps" AS ENUM ('Personal', 'SAAS');

-- CreateEnum
CREATE TYPE "StatusProps" AS ENUM ('Active', 'Pending', 'Completed');

-- DropTable
DROP TABLE "usersDemo";

-- CreateTable
CREATE TABLE "UsersDetails" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "avatar" TEXT DEFAULT 'https://image.com',
    "clerkid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Portfolios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "resume" TEXT,
    "description" TEXT NOT NULL,
    "experience" TEXT[],
    "education" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userclerkid" TEXT NOT NULL,

    CONSTRAINT "Portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "type" "TypeProps" NOT NULL,
    "status" "StatusProps",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "portfolioId" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersDetails_email_key" ON "UsersDetails"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UsersDetails_phone_key" ON "UsersDetails"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "UsersDetails_clerkid_key" ON "UsersDetails"("clerkid");

-- CreateIndex
CREATE UNIQUE INDEX "UsersDetails_email_phone_key" ON "UsersDetails"("email", "phone");

-- AddForeignKey
ALTER TABLE "Portfolios" ADD CONSTRAINT "Portfolios_userclerkid_fkey" FOREIGN KEY ("userclerkid") REFERENCES "UsersDetails"("clerkid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
