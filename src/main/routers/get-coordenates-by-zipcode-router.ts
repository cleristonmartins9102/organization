import { expressAdapter } from "@/infra/adapters";
import { Router } from "express";
import { getGeolocationByZipcodeFactory } from "../factories/controllers/get-geolocation-by-zipcode-controller-factory";

export const getCoordenatesByZipcodeRoter = (router: Router) => {
  router.post('/geolocation', expressAdapter(getGeolocationByZipcodeFactory()))
}