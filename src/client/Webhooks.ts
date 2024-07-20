import { IAsaasDeleteResponse } from '@/types/AsaasTypes';
import {
  IAsaasWebhook,
  IAsaasWebhookInvoice,
  IAsaasWebhookPayment,
  ICreateWebhookParams,
  IListWebhooksResponse,
  IUpdateWebhookParams,
  IWebhookResponse,
} from '@/types/WebhookTypes';
import { AxiosInstance } from 'axios';

export class WebhooksAPI {
  constructor(private apiClient: AxiosInstance) {}

  async create(params?: ICreateWebhookParams): Promise<IWebhookResponse> {
    try {
      const response = await this.apiClient.post('/webhooks', params);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar uma novo webhook:', error);
      throw error;
    }
  }

  async list(): Promise<IListWebhooksResponse> {
    try {
      const response = await this.apiClient.get('/webhooks');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de webhooks:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<IWebhookResponse> {
    try {
      const response = await this.apiClient.get(`/webhooks/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter o webhook:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<IAsaasDeleteResponse> {
    try {
      const response = await this.apiClient.delete(`/webhooks/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar o webhook:', error);
      throw error;
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
      console.error('Erro ao atualizar o webhook:', error);
      throw error;
    }
  }
}
