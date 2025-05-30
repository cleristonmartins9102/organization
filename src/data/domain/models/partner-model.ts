export class CreateOrganizationModel {
  name!: string
  company!: {
    fullName: string
    shorName: string
    registerNumber: string
    location?: Location
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
          lon: string
          lat: string
        }
      }
    }
  }
  owner!: {
    firstName: string
    lastName: string
    email: string
  }
}

export class OrganizationModel {
  id!: string
  name!: string
  createdAt?: Date
  updatedAt?: Date
}