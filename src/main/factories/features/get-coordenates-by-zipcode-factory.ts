import { ApiGetLocationCoordenates } from "@/data/features/api-get-location-coordenates"
import { AxiosAdapter } from "@/infra/adapters/axios-adapter"

export const getCoordenatesByZipcodeFactory = () => {
  const httpClient = new AxiosAdapter()
  return new ApiGetLocationCoordenates(httpClient)
}