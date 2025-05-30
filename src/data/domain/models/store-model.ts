import { LocationModel } from "./location-model"

export class CreateStoreModel {
    companyId!: string
    name!: string
    countryDialCode!: string
    phone!: string
    email!: string
    location!: LocationModel
}
export class StoreModel extends CreateStoreModel {
    id!: string
    createdAt!: string
}