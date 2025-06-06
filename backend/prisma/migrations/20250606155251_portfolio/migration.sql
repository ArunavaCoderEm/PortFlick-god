/*
  Warnings:

  - A unique constraint covering the columns `[portfolioId]` on the table `Portfolios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `portfolioId` to the `Portfolios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Portfolios" ADD COLUMN     "portfolioId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Portfolios_portfolioId_key" ON "Portfolios"("portfolioId");
