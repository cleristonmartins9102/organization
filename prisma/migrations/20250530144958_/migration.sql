/*
  Warnings:

  - You are about to drop the column `registrationNumber` on the `Company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registerNumber]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registerNumber` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Company_registrationNumber_key` ON `Company`;

-- AlterTable
ALTER TABLE `Company` DROP COLUMN `registrationNumber`,
    ADD COLUMN `registerNumber` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Company_registerNumber_key` ON `Company`(`registerNumber`);
