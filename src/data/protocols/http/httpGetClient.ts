import { HttpResponse } from '@data/protocols/http'

export type HttpGetClientParams<T> = {
    url: string
    body?: T
}

export interface HttpGetClient<T, R> {
    get: (params: HttpGetClientParams<T>) => Promise<HttpResponse<R>>
}