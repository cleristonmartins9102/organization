import { CreateStoreModel, StoreModel } from "../models";

export interface CreateStore {
  create (storeData: CreateStoreModel): Promise<StoreModel>
}