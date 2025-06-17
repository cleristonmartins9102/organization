import { GetAutocomplete } from "@/data/domain/features";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { ok } from "../helpers/http";

type Query = {
  reference: string
}

export class GetAutocompleteController extends Controller { 
  constructor (
    private readonly api: GetAutocomplete
  ) {
    super()
  }
  async perform(httpRequest: HttpRequest<any, Query, any>): Promise<HttpResponse<any>> {
    const { query } = httpRequest
      return ok(await this.api.get(query.reference))
  }
}