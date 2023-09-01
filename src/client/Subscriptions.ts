import { AxiosInstance } from "axios";
import {
  IAsaasDeleteResponse,
  IListSubscriptionPaymentsResponse,
  ISubscription,
  ICreateSubscriptionParams,
  IUpdateSubscriptionParams,
  IListSubscriptionsResponse,
  IListSubscriptionsParams,
} from "../types/AsaasTypes";

export class SubscriptionsAPI {
  constructor(private apiClient: AxiosInstance) {}

  async create(params?: ICreateSubscriptionParams): Promise<ISubscription> {
    try {
      const response = await this.apiClient.post('/subscriptions', params);
      return response.data;
    } catch (error) {
        console.error('Erro ao criar uma nova assinatura:', error);
        throw error;
    }
  }

  async list(params?: IListSubscriptionsParams): Promise<IListSubscriptionsResponse> {
    try {
      const response = await this.apiClient.get('/subscriptions', { params });
      return response.data;
    } catch (error) {
        console.error('Erro ao obter a lista de assinaturas:', error);
        throw error;
    }
  }

  async getById(id: string): Promise<ISubscription> {
    try {
      const response = await this.apiClient.get(`/subscriptions/${id}`);
      return response.data;
    } catch (error) {
        console.error('Erro ao obter a assinatura:', error);
        throw error;
    }
  }

  async getPayments(id: string): Promise<IListSubscriptionPaymentsResponse> {
    try {
      const response = await this.apiClient.get(`/subscriptions/${id}/payments`);
      return response.data;
    } catch (error) {
        console.error('Erro ao obter as cobranças da assinatura:', error);
        throw error;
    }
  }

  async delete(id: string): Promise<IAsaasDeleteResponse> {
    try {
      const response = await this.apiClient.delete(`/subscriptions/${id}`);
      return response.data;
    } catch (error) {
        console.error('Erro ao deletar a assinatura:', error);
        throw error;
    }
  }

  async updateById(id: string, params?: IUpdateSubscriptionParams): Promise<ISubscription> {
    try {
      const response = await this.apiClient.post(`/subscriptions/${id}`, params);
      return response.data;
    } catch (error) {
        console.error('Erro ao atualizar a assinatura:', error);
        throw error;
    }
  }
}