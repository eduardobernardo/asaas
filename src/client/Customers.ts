import { AxiosInstance } from 'axios';
import {
  APIOptions,
  IAsaasCustomer,
  IAsaasCustomerResponse,
  IAsaasDeleteResponse,
  IListAsaasCustomerResponse,
  IListCustomersParams,
} from '../types/AsaasTypes';
import { BaseAPI } from './BaseAPI';

export class CustomersAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async new(customerData: IAsaasCustomer): Promise<IAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.post('/customers', customerData);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao criar o cliente:');
    }
  }

  async list(
    params?: IListCustomersParams,
  ): Promise<IListAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.get('/customers', { params });
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a lista de clientes:');
    }
  }

  async getById(id: string): Promise<IAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.get(`/customers/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter o cliente:');
    }
  }

  async delete(id: string): Promise<IAsaasDeleteResponse> {
    try {
      const response = await this.apiClient.delete(`/customers/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao deletar o cliente:');
    }
  }

  async restore(id: string): Promise<IAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.post(`/customers/${id}/restore`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao restaurar o cliente:');
    }
  }

  async updateById(
    id: string,
    customerData: IAsaasCustomer,
  ): Promise<IAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.post(
        `/customers/${id}`,
        customerData,
      );
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao atualizar o cliente:');
    }
  }
}
