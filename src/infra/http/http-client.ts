import { http } from './http.adapter'

export interface IHttpService<T> {
  items: Array<T>
  page: number
  total_pages: number
  total_results: number
}

export class HttpClient {
  protected get(uriPath: string, params: object = {}): Promise<any> {
    return http.get(uriPath, { params: params }).then((response: any) => response)
  }

  protected post(uriPath: string, data: object, headers: object = {}): Promise<any> {
    return http.post(uriPath, data, headers).then((response: any) => response)
  }

  protected put(uriPath: string, data: object): Promise<any> {
    return http.put(uriPath, data).then((response: any) => response)
  }

  protected delete(uriPath: string, data: object, headers: object = {}): Promise<any> {
    return http.delete(uriPath, { data: data }).then((response: any) => response)
  }
}
