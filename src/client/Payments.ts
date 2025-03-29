import { AxiosInstance } from 'axios';
import {
  APIOptions,
  IAsaasDeleteResponse,
  IAsaasPayment,
  IAsaasPaymentBoletoResponse,
  IAsaasPaymentLimitResponse,
  IAsaasPaymentPixQrCodeResponse,
  IAsaasPaymentReceivedInCash,
  IAsaasPaymentRefund,
  IAsaasPaymentResponse,
  IListAsaasPaymentsResponse,
  IListPaymentsParams,
} from '../types/AsaasTypes';
import { BaseAPI } from './BaseAPI';

export class PaymentsAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async new(paymentData: IAsaasPayment): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post('/payments', paymentData);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao criar a cobrança:');
    }
  }

  async list(
    params?: IListPaymentsParams,
  ): Promise<IListAsaasPaymentsResponse> {
    try {
      const response = await this.apiClient.get('/payments', { params });
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a lista de cobranças:');
    }
  }

  async getById(id: string): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.get(`/payments/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao obter a cobrança:');
    }
  }

  async delete(id: string): Promise<IAsaasDeleteResponse> {
    try {
      const response = await this.apiClient.delete(`/payments/${id}`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao deletar a cobrança:');
    }
  }

  async restore(id: string): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(`/payments/${id}/restore`);
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao restaurar a cobrança:');
    }
  }

  async updateById(
    id: string,
    paymentData: IAsaasPayment,
  ): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(
        `/payments/${id}`,
        paymentData,
      );
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao atualizar a cobrança:');
    }
  }

  async refund(
    id: string,
    refundData: IAsaasPaymentRefund,
  ): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(
        `/payments/${id}/refund`,
        refundData,
      );
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao estornar a cobrança:');
    }
  }

  async getIdentificationField(
    id: string,
  ): Promise<IAsaasPaymentBoletoResponse> {
    try {
      const response = await this.apiClient.get(
        `/payments/${id}/identificationField`,
      );
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao obter a linha digiável do boleto da cobrança:',
      );
    }
  }

  async getPixQrCode(id: string): Promise<IAsaasPaymentPixQrCodeResponse> {
    try {
      const response = await this.apiClient.get(`/payments/${id}/pixQrCode`);
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao obter o QR Code Pix da cobrança:',
      );
    }
  }

  async receiveInCash(
    id: string,
    paymentData: IAsaasPaymentReceivedInCash,
  ): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(
        `/payments/${id}/receiveInCash`,
        paymentData,
      );
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao confirmar recebimento em dinheiro da cobrança:',
      );
    }
  }

  async undoReceivedInCash(id: string): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(
        `/payments/${id}/undoReceivedInCash`,
      );
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao desfazer a confirmação de recebimento em dinheiro da cobrança:',
      );
    }
  }

  async limits(): Promise<IAsaasPaymentLimitResponse> {
    try {
      const response = await this.apiClient.get(`/payments/limits`);
      return response.data;
    } catch (error) {
      return this.handleError(
        error,
        'Erro ao obter os limites diários de cobrança:',
      );
    }
  }
}
