import { CreateOrganizationRepository, GetOrganizationByidRepository } from "@/data/domain/features";
import { CreateOrganizationModel, OrganizationModel } from "@/data/domain/models";
import { PrismaClient, Prisma } from "@prisma/client";
import { createOrganization } from "./create-organization";

export class MysqlOrganizationRepository implements CreateOrganizationRepository, GetOrganizationByidRepository {
  constructor(private readonly connection: PrismaClient) { }
  async create(organizationData: CreateOrganizationModel): Promise<OrganizationModel> {
    const response = await this.connection.$transaction(async (tx) => {
      const organization = await tx.organization.create({
        data: { name: organizationData.name }
      })

      const companyLocation = await tx.location.create({
        data: {
          address: organizationData.company.store.location.address,
          number: organizationData.company.store.location.number,
          zipCode: organizationData.company.store.location.zipCode,
          countryCode: organizationData.company.store.location.countryCode,
          country: organizationData.company.store.location.country,
          city: organizationData.company.store.location.city,
          lat: organizationData.company.store.location.coordenates.lat,
          lng: organizationData.company.store.location.coordenates.lon
        }
      })

      const company = await tx.company.create({
        data: {
          fullName: organizationData.company.fullName,
          shortName: organizationData.company.shorName,
          registrationNumber: organizationData.company.cnpj,
          addressId: companyLocation.id,
          organizationId: organization.id
        }
      })

      const storeLocation = await tx.location.create({
        data: {
          address: organizationData.company.store.location.address,
          number: organizationData.company.store.location.number,
          zipCode: organizationData.company.store.location.zipCode,
          countryCode: organizationData.company.store.location.countryCode,
          country: organizationData.company.store.location.country,
          city: organizationData.company.store.location.city,
          lat: organizationData.company.store.location.coordenates.lat,
          lng: organizationData.company.store.location.coordenates.lon
        }
      })

      

      const store = await tx.store.create({
        data: {
          company: {
            connect: { id: company.id }
          },
          location: {
            connect: { id: storeLocation.id}
          },
          name: organizationData.company.store.name,
          countryDialCode: organizationData.company.store.countryDialCode,
          phone: organizationData.company.store.phone
        }
      })

      const userLocation = await tx.location.create({
        data: {
          address: organizationData.company.store.location.address,
          number: organizationData.company.store.location.number,
          zipCode: organizationData.company.store.location.zipCode,
          countryCode: organizationData.company.store.location.countryCode,
          country: organizationData.company.store.location.country,
          city: organizationData.company.store.location.city,
          lat: organizationData.company.store.location.coordenates.lat,
          lng: organizationData.company.store.location.coordenates.lon
        }
      })

      await tx.user.create({
        data: {
          firstName: organizationData.owner.firstName,
          lastName: organizationData.owner.lastName,
          email: organizationData.owner.email,
          role: 'owner',
          location: {
            connect: { id: userLocation.id }
          },
          organization: {
            connect: { id: organization.id }
          },
          company: { 
            connect: { id: company.id }
          },
          stores: {
            connect: { id: store.id }
          }
        }
      })
      return organization
    })

    return response as any
  }

  async getById(id: string): Promise<OrganizationModel> {
    return {} as any
  }
}