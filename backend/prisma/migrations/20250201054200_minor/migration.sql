/*
  Warnings:

  - Added the required column `template` to the `Portfolios` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TemplateProps" AS ENUM ('Template1', 'Template2', 'Template3', 'Template4');

-- AlterTable
ALTER TABLE "Portfolios" ADD COLUMN     "template" "TemplateProps" NOT NULL;

-- AlterTable
ALTER TABLE "UsersDetails" ALTER COLUMN "avatar" SET DEFAULT 'https://placehold.co/400';
