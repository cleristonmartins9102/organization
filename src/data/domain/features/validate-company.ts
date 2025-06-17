import { CreateCompanyModel } from "../models";

export interface ValidateCompany {
  validate(companyModel: CreateCompanyModel): Promise<any>
}