import {
  ICreateBillParams,
  IListBillsResponse,
  IBillResponse,
  IListBillsParams,
  ISimulateBillResponse,
} from '@/types/BillTypes';
import { AxiosInstance } from 'axios';

export class BillAPI {
  constructor(private apiClient: AxiosInstance) {}

  async create(params?: ICreateBillParams): Promise<IBillResponse> {
    try {
      const response = await this.apiClient.post('/bill', params);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar um pagamento de conta:', error);
      throw error;
    }
  }

  async list(params?: IListBillsParams): Promise<IListBillsResponse> {
    try {
      const response = await this.apiClient.get('/bill', { params });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de pagamento de contas:', error);
      throw error;
    }
  }

  async simulate(params?: ISimulateBillResponse): Promise<IBillResponse> {
    try {
      const response = await this.apiClient.post(`/bill/simulate`, params);
      return response.data;
    } catch (error) {
      console.error('Erro ao simular o pagamento de contas:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<IBillResponse> {
    try {
      const response = await this.apiClient.get(`/bill/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter o pagamento de contas:', error);
      throw error;
    }
  }

  async cancel(id: string): Promise<IBillResponse> {
    try {
      const response = await this.apiClient.post(`/bill/${id}/cancel`);
      return response.data;
    } catch (error) {
      console.error('Erro ao cancelar o pagamento de contas:', error);
      throw error;
    }
  }
}
