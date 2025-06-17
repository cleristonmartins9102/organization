import { GetAutocomplete } from "../domain/features";
import { HttpClient } from "../domain/features/http-client";

export class ApiGetAutocomplete implements GetAutocomplete {
  constructor (private readonly httpClient: HttpClient) {}
  async get (reference: string): Promise<GetAutocomplete.Result> {
    const apiKey = 'AIzaSyCz-ibZfvm4hZThz_fU7H0KT8uqKa0wdY8'
    const address = encodeURIComponent(reference);
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&language=pt-BR&components=country:br&key=${apiKey}`;
     try {
       const response: any = await this.httpClient.request({ method: HttpClient.Methods.POST, url})
       return response.data.predictions.map((r: any) => r.description)
       return null as any
     } catch (error) {
      console.log(error)
      throw error
     }
  }
}