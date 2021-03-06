import { HttpResponse } from '@data/protocols/http'

export type HttpPostClientParams = {
    url: string
    body?: any
}

export interface HttpPostClient<T, R> {
    post: (params: HttpPostClientParams) => Promise<HttpResponse<R>>
}