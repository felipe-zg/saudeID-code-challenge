import { HttpResponse } from '@data/protocols/http'

export type HttpGetClientParams = {
    url: string
}

export interface HttpGetClient<R> {
    get: (params: HttpGetClientParams) => Promise<HttpResponse<R>>
}