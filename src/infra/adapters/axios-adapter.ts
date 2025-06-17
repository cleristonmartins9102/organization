import { HttpClient } from "@/data/domain/features/http-client";
import axios, { AxiosError } from "axios";

export class AxiosAdapter implements HttpClient {
  async request<R extends { status: number, data: any }>(params: HttpClient.Params): Promise<R> {
    let response
    try {
      let requestData: any = { method: params.method, url: params.url }
      if (params.data) {
        requestData.data = params.data
      }
      if (params.headers?.contentType) {
        requestData.headers = { ...requestData.headers, 'ContentType': params.headers.contentType}
      }
      const httpResponse = await axios.request(requestData)
      response = {
        status: httpResponse.status,
        data: httpResponse.data
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        response = {
          status: error.response?.status as any,
          data: error.response?.data
        }
      }
      
    }
    return response as R
  }
}