import { AxiosInstance } from "axios";
import { 
  IAsaasCustomer, 
  IAsaasCustomerResponse, 
  IAsaasDeleteCustomerResponse, 
  IListAsaasCustomerResponse, 
  IListCustomersParams 
} from "@/types/AsaasTypes";

export class CustomersAPI {
  constructor(private apiClient: AxiosInstance) {}

  async new(customerData: IAsaasCustomer): Promise<IAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.post('/customers', customerData);
      return response.data;
    } catch (error) {
        console.error('Erro ao criar o cliente:', error);
        throw error;
    }
  }

  async list(params?: IListCustomersParams): Promise<IListAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.get('/customers', { params });
      return response.data;
    } catch (error) {
        console.error('Erro ao obter a lista de clientes:', error);
        throw error;
    }
  }

  async getById(id: string): Promise<IAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.get(`/customers/${id}`);
      return response.data;
    } catch (error) {
        console.error('Erro ao obter o cliente:', error);
        throw error;
    }
  }

  async delete(id: string): Promise<IAsaasDeleteCustomerResponse> {
    try {
      const response = await this.apiClient.delete(`/customers/${id}`);
      return response.data;
    } catch (error) {
        console.error('Erro ao deletar o cliente:', error);
        throw error;
    }
  }

  async restore(id: string): Promise<IAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.post(`/customers/${id}/restore`);
      return response.data;
    } catch (error) {
        console.error('Erro ao restaurar o cliente:', error);
        throw error;
    }
  }

  async updateById(id: string, customerData: IAsaasCustomer): Promise<IAsaasCustomerResponse> {
    try {
      const response = await this.apiClient.post(`/customers/${id}`, customerData);
      return response.data;
    } catch (error) {
        console.error('Erro ao atualizar o cliente:', error);
        throw error;
    }
  }
}