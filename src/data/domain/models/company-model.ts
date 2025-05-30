import { LocationModel, StoreModel } from "./"

export class CreateCompanyModel {
  id!: string
  organizationId?: string
  fullName!: string
  shortName!: string
  email!: string
  countryDialCode!: string
  phone!: string
  registrationNumber!: string
  location!: LocationModel
}
export class CompanyModel extends CreateCompanyModel{
  id!: string
  store!: StoreModel
  createdAt!: Date
}