import {
  ICreateInvoiceParams,
  IListInvoicesResponse,
  IUpdateInvoiceParams,
  IInvoiceResponse,
  IListInvoicesParams,
} from '@/types/InvoiceTypes';
import { AxiosInstance } from 'axios';

export class InvoicesAPI {
  constructor(private apiClient: AxiosInstance) {}

  async create(params?: ICreateInvoiceParams): Promise<IInvoiceResponse> {
    try {
      const response = await this.apiClient.post('/invoices', params);
      return response.data;
    } catch (error) {
      console.error('Erro ao agendar uma nota fiscal:', error);
      throw error;
    }
  }

  async list(params?: IListInvoicesParams): Promise<IListInvoicesResponse> {
    try {
      const response = await this.apiClient.get('/invoices', { params });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de notas fiscal:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<IInvoiceResponse> {
    try {
      const response = await this.apiClient.get(`/invoices/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a nota fiscal:', error);
      throw error;
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
      console.error('Erro ao atualizar a nota fiscal:', error);
      throw error;
    }
  }

  async authorize(id: string): Promise<IInvoiceResponse> {
    try {
      const response = await this.apiClient.post(`/invoices/${id}/authorize`);
      return response.data;
    } catch (error) {
      console.error('Erro ao emitir nota fiscal:', error);
      throw error;
    }
  }

  async cancel(id: string): Promise<IInvoiceResponse> {
    try {
      const response = await this.apiClient.post(`/invoices/${id}/cancel`);
      return response.data;
    } catch (error) {
      console.error('Erro ao cancelar nota fiscal:', error);
      throw error;
    }
  }
}
