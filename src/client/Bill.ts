import {
  ICreateBillParams,
  IListBillsResponse,
  IBillResponse,
  IListBillsParams,
  ISimulateBillResponse,
} from '@/types/BillTypes';
import { AxiosInstance } from 'axios';
import { BaseAPI } from './BaseAPI';
import { APIOptions } from '@/types/AsaasTypes';

export class BillAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async create(params?: ICreateBillParams): Promise<IBillResponse> {
    try {
      const response = await this.apiClient.post('/bill', params);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao criar um pagamento de conta:');
    }
  }

  async list(params?: IListBillsParams): Promise<IListBillsResponse> {
    try {
      const response = await this.apiClient.get('/bill', { params });
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao obter a lista de pagamento de contas:',
      );
    }
  }

  async simulate(params?: ISimulateBillResponse): Promise<IBillResponse> {
    try {
      const response = await this.apiClient.post(`/bill/simulate`, params);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao simular o pagamento de contas:');
    }
  }

  async getById(id: string): Promise<IBillResponse> {
    try {
      const response = await this.apiClient.get(`/bill/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter o pagamento de contas:');
    }
  }

  async cancel(id: string): Promise<IBillResponse> {
    try {
      const response = await this.apiClient.post(`/bill/${id}/cancel`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao cancelar o pagamento de contas:');
    }
  }
}
