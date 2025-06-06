/*
  Warnings:

  - A unique constraint covering the columns `[experienceId]` on the table `Experience` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[projectId]` on the table `Projects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[skillId]` on the table `Skills` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[socialId]` on the table `SocialLinks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[testimonialId]` on the table `Testimonials` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `experienceId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillId` to the `Skills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socialId` to the `SocialLinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testimonialId` to the `Testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "experienceId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "projectId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Skills" ADD COLUMN     "skillId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SocialLinks" ADD COLUMN     "socialId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Testimonials" ADD COLUMN     "testimonialId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Experience_experienceId_key" ON "Experience"("experienceId");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_projectId_key" ON "Projects"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_skillId_key" ON "Skills"("skillId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialLinks_socialId_key" ON "SocialLinks"("socialId");

-- CreateIndex
CREATE UNIQUE INDEX "Testimonials_testimonialId_key" ON "Testimonials"("testimonialId");
