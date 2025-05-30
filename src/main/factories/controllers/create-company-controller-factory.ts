import { Controller } from "@/application/contracts/controller";
import { createCompanyUsecaseFactory } from "../features/create-company-usecase-factory";
import { CreateCompanyController } from "@/application/controllers/create-company-controller";

export const createCompanyControllerFactory = (): Controller => {
  const createCompanyUsecase = createCompanyUsecaseFactory()
  return new CreateCompanyController(createCompanyUsecase)
}