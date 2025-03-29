import { AxiosInstance } from 'axios';
import {
  IAsaasDeleteResponse,
  IAsaasPaymentBoletoResponse,
  IAsaasPaymentInstallment,
  IAsaasPaymentResponse,
  IInstallmentsParams,
  IListAsaasInstallmentsResponse,
  IListInstallmentsParams,
  APIOptions,
} from '../types/AsaasTypes';
import { BaseAPI } from './BaseAPI';

export class InstallmentsAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async list(
    params?: IListInstallmentsParams,
  ): Promise<IListAsaasInstallmentsResponse> {
    try {
      const response = await this.apiClient.get('/installments', { params });
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a lista de cobranças:');
    }
  }

  async getById(id: string): Promise<IAsaasPaymentInstallment> {
    try {
      const response = await this.apiClient.get(`/installments/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a cobrança:');
    }
  }

  async paymentBook(
    id: string,
    params?: IInstallmentsParams,
  ): Promise<IAsaasPaymentBoletoResponse> {
    try {
      const response = await this.apiClient.get(
        `/installments/${id}/paymentBook`,
        { params },
      );
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao obter a linha digiável do boleto da cobrança:',
      );
    }
  }

  async delete(id: string): Promise<IAsaasDeleteResponse> {
    try {
      const response = await this.apiClient.delete(`/installments/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao deletar o parcelamento:');
    }
  }

  async refund(id: string): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(`/installments/${id}/refund`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao estornar o parcelamento:');
    }
  }
}
