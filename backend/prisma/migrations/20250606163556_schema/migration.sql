-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "SocialLinks" DROP CONSTRAINT "SocialLinks_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "Testimonials" DROP CONSTRAINT "Testimonials_portfolioId_fkey";

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolios"("portfolioId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolios"("portfolioId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolios"("portfolioId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonials" ADD CONSTRAINT "Testimonials_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolios"("portfolioId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLinks" ADD CONSTRAINT "SocialLinks_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolios"("portfolioId") ON DELETE CASCADE ON UPDATE CASCADE;
