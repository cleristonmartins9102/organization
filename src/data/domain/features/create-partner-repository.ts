import { CreateOrganizationModel, OrganizationModel } from "../models";

export interface CreateOrganizationRepository {
  create (organizationData: CreateOrganizationModel): Promise<OrganizationModel>
}