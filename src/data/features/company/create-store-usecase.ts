import { CreateStore, CreateStoreRepository, GetCompanyByidRepository } from "@/data/domain/features";
import { CreateStoreModel, StoreModel } from "@/data/domain/models";

export class CreateStoreUsecase implements CreateStore {
  constructor (
    private readonly storeRepository: CreateStoreRepository,
  ) {}
  async create(storeData: CreateStoreModel): Promise<StoreModel> {
    return await this.storeRepository.create(storeData)
  }
}