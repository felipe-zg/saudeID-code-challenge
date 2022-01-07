import faker from 'faker';

import { HttpGetClient, HttpGetClientParams } from '@data/protocols/http/httpGetClient';
import { HttpResponse, HttpStatusCode } from '@data/protocols/http/httpResponse';

export class HttpGetClientSpy<R> implements HttpGetClient<R> {
    url = '';
    response: HttpResponse<R> = {
        statusCode: HttpStatusCode.ok,
    };

    async get(params: HttpGetClientParams): Promise<HttpResponse<R>> {
        this.url = params.url;
        return this.response;
    }
}

export const mockGetRequest = (): HttpGetClientParams => ({
    url: faker.internet.url(),
});