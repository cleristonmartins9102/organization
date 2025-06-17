import { expressAdapter } from "@/infra/adapters";
import { Router } from "express";
import { getAutocompleteControllerFactory } from "../factories/controllers/get-autocomplete-controller-factory.ts"

export const getAutoCompleteRouter = (router: Router) => {
  router.get('/geolocation/autocomplete', expressAdapter(getAutocompleteControllerFactory()))
}