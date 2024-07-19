import { AxiosInstance } from 'axios';
import {
  IListPixTransactionsParams,
  IListPixTransactionsResponse,
  IPixTransaction,
} from '../types/AsaasTypes';

export class PixTransactionsAPI {
  constructor(private apiClient: AxiosInstance) {}

  async list(
    params?: IListPixTransactionsParams,
  ): Promise<IListPixTransactionsResponse> {
    try {
      const response = await this.apiClient.get('/pix/transactions', {
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de transações Pix:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<IPixTransaction> {
    try {
      const response = await this.apiClient.get(`/pix/transactions/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter o transação Pix:', error);
      throw error;
    }
  }

  async cancel(id: string): Promise<IPixTransaction> {
    try {
      const response = await this.apiClient.post(
        `/pix/transactions/${id}/cancel`,
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao obter o transação Pix:');
      throw error;
    }
  }
}
