import { HttpResponse } from '@data/protocols/http'

export type HttpMethod = 'post' | 'put' | 'delete';

export type HttpRequest = {
    url: string;
    method: HttpMethod;
    body?: any;
    headers?: any;
};

export interface HttpClient<R = any> {
    post: (data: HttpRequest) => Promise<HttpResponse<R>>;
    delete: (data: HttpRequest) => Promise<HttpResponse<R>>;
    get: (data: HttpRequest) => Promise<HttpResponse<R>>;
}