/*
  Warnings:

  - You are about to drop the column `userclerkid` on the `Portfolios` table. All the data in the column will be lost.
  - Added the required column `username` to the `Portfolios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Portfolios" DROP CONSTRAINT "Portfolios_userclerkid_fkey";

-- AlterTable
ALTER TABLE "Portfolios" DROP COLUMN "userclerkid",
ADD COLUMN     "username" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Portfolios" ADD CONSTRAINT "Portfolios_username_fkey" FOREIGN KEY ("username") REFERENCES "UsersDetails"("username") ON DELETE CASCADE ON UPDATE CASCADE;
