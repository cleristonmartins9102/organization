import { storage } from "@/application/storage/storage";
import { CreateCompany, CreateCompanyRepository, GetOrganizationByidRepository } from "@/data/domain/features";
import { CreateCompanyModel, CompanyModel } from "@/data/domain/models";

export class CreateCompanyUsecase implements CreateCompany {
  constructor (
    private readonly organizationRepository: GetOrganizationByidRepository,
    private readonly companyRepository: CreateCompanyRepository
  ) {}
  async create(companyData: CreateCompanyModel): Promise<CompanyModel> {
    const currentUser = storage.currentUser.get<{ organizationId: number }>()
    return await this.companyRepository.create({...companyData, organizationId: currentUser.organizationId.toString() })
  }
}