export interface HttpClient {
  request <R extends { status: number, data: any }>(params: HttpClient.Params): Promise<R>
}

export namespace HttpClient {
  export enum Methods {
    POST = 'POST'
  }

  export enum ContentType {
    JSON = 'application/json'
  }

  export type Params = {
    method: Methods
    url: string
    data?: any
    headers?: {
      contentType?: ContentType
    }
  }
}