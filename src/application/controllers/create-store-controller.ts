import { CreateStore } from "@/data/domain/features";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { ok } from "../helpers/http";
import { Contracts, BuildValidator } from "@cleriston.marina/validator";

export class CreateStoreController extends Controller { 
  constructor (
    private readonly createStoreUsecase: CreateStore
  ) {
    super()
  }
  async perform(httpRequest: HttpRequest<any, any, any>): Promise<HttpResponse<any>> {
      return ok(await this.createStoreUsecase.create(httpRequest.body))
  }

  buildValidator(): Contracts.Validation {
    return BuildValidator.object({
      companyId: BuildValidator.string(),
      name: BuildValidator.string(),
      countryDialCode: BuildValidator.string(),
      phone: BuildValidator.string(),
      location: BuildValidator.object({
        address: BuildValidator.string(),
        number: BuildValidator.string(),
        zipCode: BuildValidator.string(),
        countryCode: BuildValidator.string(),
        country: BuildValidator.string(),
        city: BuildValidator.string(),
        coordenates: BuildValidator.object({
          lng: BuildValidator.string(),
          lat: BuildValidator.string()
        }),
      }),
    }) as any
  }
}