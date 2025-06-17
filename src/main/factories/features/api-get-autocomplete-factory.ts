import { ApiGetAutocomplete } from "@/data/features/api-get-autocomplete"
import { AxiosAdapter } from "@/infra/adapters/axios-adapter"

export const apiGetAutocompleteFactory = () => {
  const httpClient = new AxiosAdapter()
  return new ApiGetAutocomplete(httpClient)
}