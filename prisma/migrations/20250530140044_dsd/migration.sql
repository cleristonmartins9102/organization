/*
  Warnings:

  - You are about to drop the column `registrationId` on the `Company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registrationNumber]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registrationNumber` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Company` DROP COLUMN `registrationId`,
    ADD COLUMN `registrationNumber` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Company_registrationNumber_key` ON `Company`(`registrationNumber`);
