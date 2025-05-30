import { Controller } from "@/application/contracts/controller";
import { CreateStoreController } from "@/application/controllers/create-store-controller";
import { createStoreUsecaseFactory } from "../features/create-store-usecase-factory";

export const createStoreControllerFactory = (): Controller => {
  const createStoreUsecase = createStoreUsecaseFactory()
  return new CreateStoreController(createStoreUsecase)
}