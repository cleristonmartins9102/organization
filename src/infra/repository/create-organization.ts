import { CreateOrganizationModel } from "@/data/domain/models";
import { Prisma } from "@prisma/client";

export const createOrganization = (data: CreateOrganizationModel): Prisma.OrganizationCreateInput => ({
  name: data.name,
  company: {
    create: [
    {
      fullName: data.company.fullName,
      shortName: data.company.shorName,
      registrationId: data.company.cnpj,
      location: {
        create: {
          address: data.company.store.location.address,
          number: data.company.store.location.number,
          zipCode: data.company.store.location.zipCode,
          countryCode: data.company.store.location.countryCode,
          country: data.company.store.location.country,
          city: data.company.store.location.city,
          lat: data.company.store.location.coordenates.lat,
          lon: data.company.store.location.coordenates.lon,
       }
      }
    }
  ,]
  },
  user: {
    create: {
      firstName: data.owner.firstName,
      lastName: data.owner.lastName,
      email: data.owner.email,
      role: 'owner',

      location: {
         create: {
            address: data.company.store.location.address,
            number: data.company.store.location.number,
            zipCode: data.company.store.location.zipCode,
            countryCode: data.company.store.location.countryCode,
            country: data.company.store.location.country,
            city: data.company.store.location.city,
            lat: data.company.store.location.coordenates.lat,
            lon: data.company.store.location.coordenates.lon,
        }
      }
    }
  }
})