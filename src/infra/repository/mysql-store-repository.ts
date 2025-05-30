import { CreateStoreRepository } from "@/data/domain/features";
import { CreateStoreModel, StoreModel } from "@/data/domain/models";
import { PrismaClient } from "@prisma/client";

export class MysqlStoreRepository implements CreateStoreRepository {
  constructor(private readonly connection: PrismaClient) { }
  async create(storeData: CreateStoreModel): Promise<StoreModel> {
    try {
      const response = await this.connection.$transaction(async (tx) => {
      const store = await tx.store.create({
        data: {
          company: { connect: { id: Number(storeData.companyId) }},
          name: storeData.name,
          countryDialCode: storeData.countryDialCode,
          phone: storeData.phone,
          email: storeData.email,
          location: {
            create: {
              address: storeData.location.address,
              number: storeData.location.number,
              complement: storeData.location.complement,
              zipCode: storeData.location.zipCode,
              city: storeData.location.city,
              countryCode: storeData.location.countryCode,
              country: storeData.location.country,
              lat: storeData.location.coordenates.lat,
              lng: storeData.location.coordenates.lng
            }
          }
        }
      })
      return store
    })

    return response as any
    } catch (error) {
      throw error
    }
  }
}