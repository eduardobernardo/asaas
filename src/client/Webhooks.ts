import { APIOptions, IAsaasDeleteResponse } from '@/types/AsaasTypes';
import {
  ICreateWebhookParams,
  IListWebhooksResponse,
  IUpdateWebhookParams,
  IWebhookResponse,
} from '@/types/WebhookTypes';
import { AxiosInstance } from 'axios';
import { BaseAPI } from './BaseAPI';

export class WebhooksAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async create(params?: ICreateWebhookParams): Promise<IWebhookResponse> {
    try {
      const response = await this.apiClient.post('/webhooks', params);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao criar uma novo webhook:');
    }
  }

  async list(): Promise<IListWebhooksResponse> {
    try {
      const response = await this.apiClient.get('/webhooks');
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a lista de webhooks:');
    }
  }

  async getById(id: string): Promise<IWebhookResponse> {
    try {
      const response = await this.apiClient.get(`/webhooks/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter o webhook:');
    }
  }

  async delete(id: string): Promise<IAsaasDeleteResponse> {
    try {
      const response = await this.apiClient.delete(`/webhooks/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao deletar o webhook:');
    }
  }

  async updateById(
    id: string,
    params?: IUpdateWebhookParams,
  ): Promise<IWebhookResponse> {
    try {
      const response = await this.apiClient.post(`/webhooks/${id}`, params);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao atualizar o webhook:');
    }
  }
}
