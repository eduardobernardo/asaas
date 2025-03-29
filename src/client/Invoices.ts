import {
  ICreateInvoiceParams,
  IListInvoicesResponse,
  IUpdateInvoiceParams,
  IInvoiceResponse,
  IListInvoicesParams,
} from '@/types/InvoiceTypes';
import { AxiosInstance } from 'axios';
import { BaseAPI } from './BaseAPI';
import { APIOptions } from '@/types/AsaasTypes';

export class InvoicesAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async create(params?: ICreateInvoiceParams): Promise<IInvoiceResponse> {
    try {
      const response = await this.apiClient.post('/invoices', params);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao agendar uma nota fiscal:');
    }
  }

  async list(params?: IListInvoicesParams): Promise<IListInvoicesResponse> {
    try {
      const response = await this.apiClient.get('/invoices', { params });
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a lista de notas fiscal:');
    }
  }

  async getById(id: string): Promise<IInvoiceResponse> {
    try {
      const response = await this.apiClient.get(`/invoices/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a nota fiscal:');
    }
  }

  async updateById(
    id: string,
    params?: IUpdateInvoiceParams,
  ): Promise<IInvoiceResponse> {
    try {
      const response = await this.apiClient.post(`/invoices/${id}`, params);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao atualizar a nota fiscal:');
    }
  }

  async authorize(id: string): Promise<IInvoiceResponse> {
    try {
      const response = await this.apiClient.post(`/invoices/${id}/authorize`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao emitir nota fiscal:');
    }
  }

  async cancel(id: string): Promise<IInvoiceResponse> {
    try {
      const response = await this.apiClient.post(`/invoices/${id}/cancel`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao cancelar nota fiscal:');
    }
  }
}
