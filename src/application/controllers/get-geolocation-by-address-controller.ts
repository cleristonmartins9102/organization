import { GetLocationCoordenates } from "@/data/domain/features";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { ok } from "../helpers/http";
import { Contracts, BuildValidator } from "@cleriston.marina/validator";

export class GetGeolocationByAddressController extends Controller { 
  constructor (
    private readonly api: GetLocationCoordenates
  ) {
    super()
  }
  async perform(httpRequest: HttpRequest<any, any, any>): Promise<HttpResponse<any>> {
      return ok(await this.api.get(httpRequest.body))
  }

  buildValidator(): Contracts.Validation {
    return BuildValidator.object({
      zipCode: BuildValidator.string()
    }) as any
  }
}