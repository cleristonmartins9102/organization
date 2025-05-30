import { CompanyAlreadyExistsError } from "@/application/errors/errors";
import { CreateCompanyRepository, GetCompanyByidRepository } from "@/data/domain/features";
import { CompanyModel, CreateCompanyModel } from "@/data/domain/models";
import { Prisma, PrismaClient } from "@prisma/client";

export class MysqlCompanyRepository implements CreateCompanyRepository {
  constructor(private readonly connection: PrismaClient) { }
  async create(companyData: CreateCompanyModel): Promise<CompanyModel> {
    try {
      const response = await this.connection.$transaction(async (tx) => {
      const company = await tx.company.create({
        data: {
          fullName: companyData.fullName,
          registerNumber: companyData.registrationNumber,
          shortName: companyData.shortName,
          email: companyData.email,
          countryDialCode: companyData.countryDialCode,
          phone: companyData.phone,
          organization: {
            connect: { id: Number(companyData.organizationId) }
          },
          location: {
            create: {
              address: companyData.location.address,
              number: companyData.location.number,
              complement: companyData.location.complement,
              zipCode: companyData.location.zipCode,
              city: companyData.location.city,
              countryCode: companyData.location.countryCode,
              country: companyData.location.country,
              lat: companyData.location.coordenates.lat,
              lng: companyData.location.coordenates.lng
            }
          }
        }
      })
      return company
    })

    return response as any
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const { modelName, target } = error.meta as any
        throw new CompanyAlreadyExistsError(target.replace(`${modelName}_`, '').replace('_key', '') as any)
      }
      throw error
    }
  }
}