import { OrganizationModel } from "../models";

export interface GetOrganizationByidRepository {
  getById (id: string): Promise<OrganizationModel>
}