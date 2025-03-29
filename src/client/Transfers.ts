import {
  ICreateTransferParams,
  IListTransfersResponse,
  ITransferResponse,
  IListTransfersParams,
  ICreateInternalTransferParams,
} from '@/types/TransferTypes';
import { AxiosInstance } from 'axios';
import { APIOptions } from '../types/AsaasTypes';
import { BaseAPI } from './BaseAPI';

export class TransfersAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async create(params?: ICreateTransferParams): Promise<ITransferResponse> {
    try {
      const response = await this.apiClient.post('/transfers', params);
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao criar uma transferência para outra conta:',
      );
    }
  }

  async list(params?: IListTransfersParams): Promise<IListTransfersResponse> {
    try {
      const response = await this.apiClient.get('/transfers', { params });
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao obter a lista de transferências:',
      );
    }
  }

  async createInternal(
    params?: ICreateInternalTransferParams,
  ): Promise<ITransferResponse> {
    try {
      const response = await this.apiClient.post(`/transfers/`, params);
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao criar uma transferência para conta Asaas:',
      );
    }
  }

  async getById(id: string): Promise<ITransferResponse> {
    try {
      const response = await this.apiClient.get(`/transfers/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a transferência:');
    }
  }

  async cancel(id: string): Promise<ITransferResponse> {
    try {
      const response = await this.apiClient.post(`/transfers/${id}/cancel`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao cancelar a transferência:');
    }
  }
}
