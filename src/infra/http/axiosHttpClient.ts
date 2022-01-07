import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { HttpGetClient, HttpGetClientParams } from '../../data/protocols/http/httpGetClient';
import { HttpPostClientParams } from '../../data/protocols/http/httpPostClient';
import { HttpResponse } from '../../data/protocols/http/httpResponse';

export class AxiosHttpClient<R = unknown> implements HttpGetClient<R> {
    private static instance: AxiosHttpClient;

    static getInstance() {
        if(!this.instance) {
            this.instance = new AxiosHttpClient();
        }
        return this.instance;
    }

    private httpClient: AxiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_GATEWAY_URL,
        timeout: 30000,
        headers: { 'Access-Control-Allow-Origin': '*' },
    });

    async get(params: HttpGetClientParams): Promise<HttpResponse<R>> {
        let axiosResponse: AxiosResponse<R>;
        try {
            axiosResponse = await this.httpClient.get(params.url);
        } catch (error) {
            axiosResponse = error.response;
        }
        return this.adapt(axiosResponse);
    }

    async post(params: HttpPostClientParams): Promise<HttpResponse<any>> {
        let axiosResponse: AxiosResponse<any>;
        try {
            axiosResponse = await  this.httpClient.post(params.url, params.body);
        } catch (error) {
            axiosResponse = error.response;
        }
        return this.adapt(axiosResponse);
    }

    async delete(params: HttpPostClientParams): Promise<HttpResponse<any>> {
        let axiosResponse: AxiosResponse<any>;
        try {
            axiosResponse = await  this.httpClient.delete(params.url, params.body);
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