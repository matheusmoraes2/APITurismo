/*
  Warnings:

  - A unique constraint covering the columns `[Tag]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `NomeUsuario` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Tag` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `NomeUsuario` VARCHAR(191) NOT NULL,
    ADD COLUMN `Tag` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_Tag_key` ON `User`(`Tag`);
