-- CreateTable
CREATE TABLE "usersDemo" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT DEFAULT 'https://image.com',
    "clerkid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usersDemo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usersDemo_email_key" ON "usersDemo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usersDemo_clerkid_key" ON "usersDemo"("clerkid");

-- CreateIndex
CREATE UNIQUE INDEX "usersDemo_email_clerkid_key" ON "usersDemo"("email", "clerkid");
