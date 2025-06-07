-- AlterTable
ALTER TABLE "Portfolios" ADD COLUMN     "displayPicture" TEXT DEFAULT 'https://placehold.co/400';

-- AlterTable
ALTER TABLE "UsersDetails" ADD COLUMN     "createdPortfolios" TEXT[] DEFAULT ARRAY[]::TEXT[];
