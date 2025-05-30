import { CompanyModel, CreateCompanyModel } from "../models";

export interface CreateCompany {
  create (companyData: CreateCompanyModel): Promise<CompanyModel>
}