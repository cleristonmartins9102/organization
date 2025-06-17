import { GetAutocompleteController } from "@/application/controllers/get-autocomplete-controller"
import { apiGetAutocompleteFactory } from "../features/api-get-autocomplete-factory"

export const getAutocompleteControllerFactory = () => {
  const apiGetAutocomplete = apiGetAutocompleteFactory()
  return new GetAutocompleteController(apiGetAutocomplete)
}