import { CompanyModel } from "../models";

export interface GetCompanyByidRepository {
  getById (id: string): Promise<CompanyModel>
}