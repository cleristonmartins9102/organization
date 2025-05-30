/*
  Warnings:

  - You are about to drop the column `userId` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_storeId_fkey`;

-- DropIndex
DROP INDEX `User_storeId_fkey` ON `User`;

-- AlterTable
ALTER TABLE `Store` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `storeId`;

-- CreateTable
CREATE TABLE `_UserStores` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserStores_AB_unique`(`A`, `B`),
    INDEX `_UserStores_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_UserStores` ADD CONSTRAINT `_UserStores_A_fkey` FOREIGN KEY (`A`) REFERENCES `Store`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserStores` ADD CONSTRAINT `_UserStores_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
