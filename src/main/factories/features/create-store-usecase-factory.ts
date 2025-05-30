import { mysqlStoreRepositoryFactory } from "../infra/repository/mysql-store-repository-factory";
import { CreateStoreUsecase } from "@/data/features/company/create-store-usecase";

export const createStoreUsecaseFactory = (): CreateStoreUsecase => {
  const storeRepository = mysqlStoreRepositoryFactory()
  return new CreateStoreUsecase(storeRepository)
}