/*
  Warnings:

  - A unique constraint covering the columns `[templateId]` on the table `Template` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `templateId` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Portfolios" DROP CONSTRAINT "Portfolios_templateId_fkey";

-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "templateId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Template_templateId_key" ON "Template"("templateId");

-- AddForeignKey
ALTER TABLE "Portfolios" ADD CONSTRAINT "Portfolios_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("templateId") ON DELETE RESTRICT ON UPDATE CASCADE;
