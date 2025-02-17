/*
  Warnings:

  - You are about to drop the column `percentage` on the `Skills` table. All the data in the column will be lost.
  - Made the column `endDate` on table `Experience` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "SocialPlatform" AS ENUM ('GitHub', 'LinkedIn', 'Twitter', 'Instagram', 'Facebook');

-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "startDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET NOT NULL,
ALTER COLUMN "endDate" SET DEFAULT 'Present',
ALTER COLUMN "endDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Portfolios" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "demoUrl" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "technologies" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "percentage",
ADD COLUMN     "proficiency" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Testimonials" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "position" TEXT,
    "avatar" TEXT,
    "portfolioId" TEXT NOT NULL,

    CONSTRAINT "Testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLinks" (
    "id" TEXT NOT NULL,
    "platform" "SocialPlatform" NOT NULL,
    "url" TEXT NOT NULL,
    "portfolioId" TEXT NOT NULL,

    CONSTRAINT "SocialLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Testimonials" ADD CONSTRAINT "Testimonials_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLinks" ADD CONSTRAINT "SocialLinks_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
