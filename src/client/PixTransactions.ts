import { AxiosInstance } from 'axios';
import {
  IListPixTransactionsParams,
  IListPixTransactionsResponse,
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
}