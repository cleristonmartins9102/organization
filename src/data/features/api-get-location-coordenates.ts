import { GetLocationCoordenates } from "../domain/features";
import { HttpClient } from "../domain/features/http-client";

export class ApiGetLocationCoordenates implements GetLocationCoordenates {
  constructor (private readonly httpClient: HttpClient) {}
  async get (param: GetLocationCoordenates.Params): Promise<{ lat: number, lng: number }> {
    const apiKey = 'AIzaSyCz-ibZfvm4hZThz_fU7H0KT8uqKa0wdY8'
    const address = encodeURIComponent(`${param.zipCode},Brazil`);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
     try {
       const response: any = await this.httpClient.request({ method: HttpClient.Methods.POST, url})
       if (response.data.results.length > 0) {
        return {
          components: response.data.results[0].address_components,
          formated: response.data.results[0].formatted_address
        } as any
       }
       return null as any
     } catch (error) {
      console.log(error)
      throw error
     }
  }
}