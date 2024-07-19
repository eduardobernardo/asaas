import {
  IAccountResponse,
  IAccountResponseWithApiKey,
  ICreateAccountParams,
  IListAccountsParams,
  IListAccountsResponse,
} from '@/types/AccountTypes';
import { AxiosInstance } from 'axios';

export class AccountsAPI {
  constructor(private apiClient: AxiosInstance) {}

  // apiKey é retornada apenas na criação
  async create(
    params?: ICreateAccountParams,
  ): Promise<IAccountResponseWithApiKey> {
    try {
      const response = await this.apiClient.post('/accounts', params);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar subconta:', error);
      throw error;
    }
  }

  async list(params?: IListAccountsParams): Promise<IListAccountsResponse> {
    try {
      const response = await this.apiClient.get('/accounts', { params });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de subcontas:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<IAccountResponse> {
    try {
      const response = await this.apiClient.get(`/accounts`, {
        params: { id },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a subconta:', error);
      throw error;
    }
  }
}
