import { MysqlOrganizationRepository } from "@/infra/repository/mysql-organization-repository";
import { PrismaClient } from "@prisma/client";

export const mysqlOrganizationRepositoryFactory = (): MysqlOrganizationRepository => {
  const prismaClient = new PrismaClient()
  return new MysqlOrganizationRepository(prismaClient)
}