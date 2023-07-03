import { AxiosInstance } from "axios";
import {
  IAsaasDeleteResponse,
  IAsaasPaymentBoletoResponse,
  IAsaasPaymentInstallment,
  IAsaasPaymentResponse,
  IInstallmentsParams,
  IListAsaasInstallmentsResponse,
  IListInstallmentsParams,
} from "../types/AsaasTypes";

export class InstallmentsAPI {
  constructor(private apiClient: AxiosInstance) {}

  async list(params?: IListInstallmentsParams): Promise<IListAsaasInstallmentsResponse> {
    try {
      const response = await this.apiClient.get('/installments', { params });
      return response.data;
    } catch (error) {
        console.error('Erro ao obter a lista de cobranças:', error);
        throw error;
    }
  }

  async getById(id: string): Promise<IAsaasPaymentInstallment> {
    try {
      const response = await this.apiClient.get(`/installments/${id}`);
      return response.data;
    } catch (error) {
        console.error('Erro ao obter a cobrança:', error);
        throw error;
    }
  }

  async paymentBook(id: string, params?: IInstallmentsParams): Promise<IAsaasPaymentBoletoResponse> {
    try {
      const response = await this.apiClient.get(`/installments/${id}/paymentBook`, { params } );
      return response.data;
    } catch (error) {
        console.error('Erro ao obter a linha digiável do boleto da cobrança:', error);
        throw error;
    }
  }

  async delete(id: string): Promise<IAsaasDeleteResponse> {
    try {
      const response = await this.apiClient.delete(`/installments/${id}`);
      return response.data;
    } catch (error) {
        console.error('Erro ao deletar o parcelamento:', error);
        throw error;
    }
  }

  async refund(id: string): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(`/installments/${id}/refund`);
      return response.data;
    } catch (error) {
        console.error('Erro ao estornar o parcelamento:', error);
        throw error;
    }
  }
}