import { CreateCompany } from "@/data/domain/features";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { badRequest, ok } from "../helpers/http";
import { Contracts, BuildValidator } from "@cleriston.marina/validator";
import { CompanyAlreadyExistsError } from "../errors/errors";

export class CreateCompanyController extends Controller { 
  constructor (
    private readonly createCompanyUsecase: CreateCompany
  ) {
    super()
  }
  async perform(httpRequest: HttpRequest<any, any, any>): Promise<HttpResponse<any>> {
    try {
      return ok(await this.createCompanyUsecase.create(httpRequest.body))
    } catch (error) {
      if (error instanceof CompanyAlreadyExistsError) {
        return badRequest({ error: error.message })
      }
      throw error
    }
  }

  buildValidator(): Contracts.Validation {
    return BuildValidator.object({
      fullName: BuildValidator.string(),
      shortName: BuildValidator.string(),
      registrationNumber: BuildValidator.string(),
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