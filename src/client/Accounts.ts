import {
  IAccountResponse,
  IAccountResponseWithApiKey,
  ICreateAccountParams,
  IListAccountsParams,
  IListAccountsResponse,
} from '@/types/AccountTypes';
import { AxiosInstance } from 'axios';
import { BaseAPI } from './BaseAPI';
import { APIOptions } from '@/types/AsaasTypes';

export class AccountsAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  // apiKey é retornada apenas na criação
  async create(
    params?: ICreateAccountParams,
  ): Promise<IAccountResponseWithApiKey> {
    try {
      const response = await this.apiClient.post('/accounts', params);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao criar subconta:');
    }
  }

  async list(params?: IListAccountsParams): Promise<IListAccountsResponse> {
    try {
      const response = await this.apiClient.get('/accounts', { params });
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a lista de subcontas:');
    }
  }

  async getById(id: string): Promise<IAccountResponse> {
    try {
      const response = await this.apiClient.get(`/accounts`, {
        params: { id },
      });
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a subconta:');
    }
  }
}
