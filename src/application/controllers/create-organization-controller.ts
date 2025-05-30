import { CreateOrganizationRepository } from "@/data/domain/features";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";
import { ok } from "../helpers/http";

export class CreateOrganizationController extends Controller { 
  constructor (
    private readonly organization: CreateOrganizationRepository
  ) {
    super()
  }
  async perform(httpRequest: HttpRequest<any, any, any>): Promise<HttpResponse<any>> {
    return ok(await this.organization.create(httpRequest.body))
  }
}