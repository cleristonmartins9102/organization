import { LocationModel } from "./location-model"

export class CreateOrganizationModel {
  name!: string
  company!: {
    fullName: string
    shorName: string
    registerNumber: string
    location?: LocationModel
    email: string
    countryDialCode: string
    phone: string
    store: {
      name: string
      countryDialCode: string
      phone: string
      email: string
      location: {
        address: string
        number: string
        zipCode: string
        countryCode: string
        country: string
        city: string
        coordenates: {
          lng: number
          lat: number
        }
      }
    }
  }
}

export class OrganizationModel {
  id!: string
  name!: string
  createdAt?: Date
  updatedAt?: Date
}