export class StoreModel {
    name!: string
    countryDialCode!: string
    phone!: string
    location!: {
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