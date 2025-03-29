import { AxiosInstance } from 'axios';
import {
  APIOptions,
  IAsaasDeleteResponse,
  IListSubscriptionPaymentsResponse,
  ISubscription,
  ICreateSubscriptionParams,
  IUpdateSubscriptionParams,
  IListSubscriptionsResponse,
  IListSubscriptionsParams,
  ICreateSubscriptionWithCreditCardParams,
} from '../types/AsaasTypes';
import { BaseAPI } from './BaseAPI';

export class SubscriptionsAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async create(
    params?:
      | ICreateSubscriptionParams
      | ICreateSubscriptionWithCreditCardParams,
  ): Promise<ISubscription> {
    try {
      const response = await this.apiClient.post('/subscriptions', params);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao criar uma nova assinatura:');
    }
  }

  async list(
    params?: IListSubscriptionsParams,
  ): Promise<IListSubscriptionsResponse> {
    try {
      const response = await this.apiClient.get('/subscriptions', { params });
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a lista de assinaturas:');
    }
  }

  async getById(id: string): Promise<ISubscription> {
    try {
      const response = await this.apiClient.get(`/subscriptions/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a assinatura:');
    }
  }

  async getPayments(id: string): Promise<IListSubscriptionPaymentsResponse> {
    try {
      const response = await this.apiClient.get(
        `/subscriptions/${id}/payments`,
      );
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao obter as cobranças da assinatura:',
      );
    }
  }

  async delete(id: string): Promise<IAsaasDeleteResponse> {
    try {
      const response = await this.apiClient.delete(`/subscriptions/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao deletar a assinatura:');
    }
  }

  async updateById(
    id: string,
    params?: IUpdateSubscriptionParams,
  ): Promise<ISubscription> {
    try {
      const response = await this.apiClient.post(
        `/subscriptions/${id}`,
        params,
      );
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao atualizar a assinatura:');
    }
  }
}
