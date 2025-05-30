/*
  Warnings:

  - Added the required column `email` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Store` DROP FOREIGN KEY `Store_companyId_fkey`;

-- DropIndex
DROP INDEX `Store_companyId_key` ON `Store`;

-- AlterTable
ALTER TABLE `Store` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
