export interface GetAutocomplete {
  get (reference: string): Promise<GetAutocomplete.Result>
}

export namespace GetAutocomplete {
  export type Result = {
    fullAddress: string
  }[]
}