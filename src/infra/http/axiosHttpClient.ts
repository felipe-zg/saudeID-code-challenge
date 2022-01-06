import axios, { AxiosResponse } from 'axios';
import { HttpGetClient, HttpGetClientParams } from '../../data/protocols/http/httpGetClient';
import { HttpPostClientParams } from '../../data/protocols/http/httpPostClient';
import { HttpResponse } from '../../data/protocols/http/httpResponse';

export class AxiosHttpClient<R = unknown> implements HttpGetClient<R> {
    async get(params: HttpGetClientParams): Promise<HttpResponse<R>> {
        let axiosResponse: AxiosResponse<R>;
        try {
            axiosResponse = await axios.get(params.url);
        } catch (error) {
            axiosResponse = error.response;
        }
        return this.adapt(axiosResponse);
    }

    async post(params: HttpPostClientParams): Promise<HttpResponse<any>> {
        let axiosResponse: AxiosResponse<any>;
        try {
            axiosResponse = await axios.post(params.url, params.body);
        } catch (error) {
            axiosResponse = error.response;
        }
        return this.adapt(axiosResponse);
    }

    async delete(params: HttpPostClientParams): Promise<HttpResponse<any>> {
        let axiosResponse: AxiosResponse<any>;
        try {
            axiosResponse = await axios.delete(params.url, params.body);
        } catch (error) {
            axiosResponse = error.response;
        }
        return this.adapt(axiosResponse);
    }

    private adapt(axiosResponse: AxiosResponse): HttpResponse<R> {
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data,
        };
    }
}