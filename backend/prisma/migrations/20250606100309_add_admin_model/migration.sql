/*
  Warnings:

  - You are about to drop the column `template` on the `Portfolios` table. All the data in the column will be lost.
  - Added the required column `templateId` to the `Portfolios` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PortfolioStyle" AS ENUM ('Minimalist', 'Modern', 'Creative', 'Professional');

-- DropIndex
DROP INDEX "UsersDetails_email_phone_key";

-- AlterTable
ALTER TABLE "Portfolios" DROP COLUMN "template",
ADD COLUMN     "templateId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "TemplateProps";

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "adminCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Template" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "previewUrl" TEXT,
    "portfolioStyle" "PortfolioStyle" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_phone_key" ON "Admin"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_adminCode_key" ON "Admin"("adminCode");

-- CreateIndex
CREATE UNIQUE INDEX "Template_name_key" ON "Template"("name");

-- AddForeignKey
ALTER TABLE "Portfolios" ADD CONSTRAINT "Portfolios_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
