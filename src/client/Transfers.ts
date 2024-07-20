import {
  ICreateTransferParams,
  IListTransfersResponse,
  ITransferResponse,
  IListTransfersParams,
  ICreateInternalTransferParams,
} from '@/types/TransferTypes';
import { AxiosInstance } from 'axios';

export class TransfersAPI {
  constructor(private apiClient: AxiosInstance) {}

  async create(params?: ICreateTransferParams): Promise<ITransferResponse> {
    try {
      const response = await this.apiClient.post('/transfers', params);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar uma transferência para outra conta:', error);
      throw error;
    }
  }

  async list(params?: IListTransfersParams): Promise<IListTransfersResponse> {
    try {
      const response = await this.apiClient.get('/transfers', { params });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de transferências:', error);
      throw error;
    }
  }

  async createInternal(
    params?: ICreateInternalTransferParams,
  ): Promise<ITransferResponse> {
    try {
      const response = await this.apiClient.post(`/transfers/`, params);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar uma transferência para conta Asaas:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<ITransferResponse> {
    try {
      const response = await this.apiClient.get(`/transfers/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a transferência:', error);
      throw error;
    }
  }

  async cancel(id: string): Promise<ITransferResponse> {
    try {
      const response = await this.apiClient.post(`/transfers/${id}/cancel`);
      return response.data;
    } catch (error) {
      console.error('Erro ao cancelar a transferência:', error);
      throw error;
    }
  }
}
