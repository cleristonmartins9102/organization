import { MysqlCompanyRepository } from "@/infra/repository/mysql-company-repository";
import { PrismaClient } from "@prisma/client";

export const mysqlCompanyRepositoryFactory = (): MysqlCompanyRepository => {
  const prismaClient = new PrismaClient()
  return new MysqlCompanyRepository(prismaClient)
}