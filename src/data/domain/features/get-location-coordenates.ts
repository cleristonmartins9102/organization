export interface GetLocationCoordenates {
  get (params: GetLocationCoordenates.Params): Promise<{lat: number, lng: number}>
}

export namespace GetLocationCoordenates {
  export type Params = {
    address: string
    number: string
    city: string
    country: string
    zipCode?: string
  }
}