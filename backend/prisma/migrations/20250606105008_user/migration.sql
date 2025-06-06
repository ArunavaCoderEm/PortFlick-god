/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `UsersDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UsersDetails_username_key" ON "UsersDetails"("username");
