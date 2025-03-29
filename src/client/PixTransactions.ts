import { AxiosInstance } from 'axios';
import {
  APIOptions,
  IListPixTransactionsParams,
  IListPixTransactionsResponse,
  IPixTransaction,
} from '../types/AsaasTypes';
import { BaseAPI } from './BaseAPI';

export class PixTransactionsAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async list(
    params?: IListPixTransactionsParams,
  ): Promise<IListPixTransactionsResponse> {
    try {
      const response = await this.apiClient.get('/pix/transactions', {
        params,
      });
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao obter a lista de transações Pix:',
      );
    }
  }

  async getById(id: string): Promise<IPixTransaction> {
    try {
      const response = await this.apiClient.get(`/pix/transactions/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter o transação Pix:');
    }
  }

  async cancel(id: string): Promise<IPixTransaction> {
    try {
      const response = await this.apiClient.post(
        `/pix/transactions/${id}/cancel`,
      );
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao cancelar o transação Pix:');
    }
  }
}
