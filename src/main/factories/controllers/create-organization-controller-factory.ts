import { Controller } from "@/application/contracts/controller";
import { mysqlOrganizationRepositoryFactory } from "../infra";
import { CreateOrganizationController } from "@/application/controllers/create-organization-controller";

export const createOrganizationControllerFactory = (): Controller => {
  const mysqlOrganizationRepository = mysqlOrganizationRepositoryFactory()
  return new CreateOrganizationController(mysqlOrganizationRepository)
}