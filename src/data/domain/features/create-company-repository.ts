import { CompanyModel, CreateCompanyModel } from "../models";

export interface CreateCompanyRepository {
  create (companyData: CreateCompanyModel): Promise<CompanyModel>
}