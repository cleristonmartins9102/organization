import { CreateStoreModel, StoreModel } from "../models";

export interface CreateStoreRepository {
  create (storeData: CreateStoreModel): Promise<StoreModel>
}