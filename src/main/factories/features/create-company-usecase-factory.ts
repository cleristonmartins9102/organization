import { CreateCompanyUsecase } from "@/data/features/company/create-company-usecase";
import { mysqlOrganizationRepositoryFactory } from "../infra/repository/mysql-organization-repository-factory"
import { mysqlCompanyRepositoryFactory } from "../infra";

export const createCompanyUsecaseFactory = (): CreateCompanyUsecase => {
  const organizationRepository = mysqlOrganizationRepositoryFactory()
  const companyRepository = mysqlCompanyRepositoryFactory()
  return new CreateCompanyUsecase(organizationRepository, companyRepository)
}