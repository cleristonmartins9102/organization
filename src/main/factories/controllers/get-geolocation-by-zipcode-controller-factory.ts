import { GetGeolocationByAddressController } from "../../../application/controllers/get-geolocation-by-address-controller"
import { getCoordenatesByZipcodeFactory } from "../features/get-coordenates-by-zipcode-factory"

export const getGeolocationByZipcodeFactory = () => {
  const apiGetCoordenatesByZipcode = getCoordenatesByZipcodeFactory()
  return new GetGeolocationByAddressController(apiGetCoordenatesByZipcode)
}