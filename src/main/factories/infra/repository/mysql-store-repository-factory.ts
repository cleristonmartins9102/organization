import { MysqlStoreRepository } from "@/infra/repository/mysql-store-repository";
import { PrismaClient } from "@prisma/client";

export const mysqlStoreRepositoryFactory = (): MysqlStoreRepository => {
  const prismaClient = new PrismaClient()
  return new MysqlStoreRepository(prismaClient)
}