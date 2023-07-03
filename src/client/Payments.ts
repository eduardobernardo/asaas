import { AxiosInstance } from "axios";
import {
  IAsaasDeleteResponse,
  IAsaasPayment,
  IAsaasPaymentBoletoResponse,
  IAsaasPaymentLimitResponse,
  IAsaasPaymentPixQrCodeResponse,
  IAsaasPaymentReceivedInCash,
  IAsaasPaymentRefund,
  IAsaasPaymentResponse,
  IListAsaasPaymentsResponse,
  IListPaymentsParams
} from "../types/AsaasTypes";

export class PaymentsAPI {
  constructor(private apiClient: AxiosInstance) {}

  async new(paymentData: IAsaasPayment): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post('/payments', paymentData);
      return response.data;
    } catch (error) {
        console.error('Erro ao criar a cobrança:', error);
        throw error;
    }
  }

  async list(params?: IListPaymentsParams): Promise<IListAsaasPaymentsResponse> {
    try {
      const response = await this.apiClient.get('/payments', { params });
      return response.data;
    } catch (error) {
        console.error('Erro ao obter a lista de cobranças:', error);
        throw error;
    }
  }

  async getById(id: string): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.get(`/payments/${id}`);
      return response.data;
    } catch (error) {
        console.error('Erro ao obter a cobrança:', error);
        throw error;
    }
  }

  async delete(id: string): Promise<IAsaasDeleteResponse> {
    try {
      const response = await this.apiClient.delete(`/payments/${id}`);
      return response.data;
    } catch (error) {
        console.error('Erro ao deletar a cobrança:', error);
        throw error;
    }
  }

  async restore(id: string): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(`/payments/${id}/restore`);
      return response.data;
    } catch (error) {
        console.error('Erro ao restaurar a cobrança:', error);
        throw error;
    }
  }

  async updateById(id: string, paymentData: IAsaasPayment): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(`/payments/${id}`, paymentData);
      return response.data;
    } catch (error) {
        console.error('Erro ao atualizar a cobrança:', error);
        throw error;
    }
  }

  async refund(id: string, refundData: IAsaasPaymentRefund): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(`/payments/${id}/refund`, refundData);
      return response.data;
    } catch (error) {
        console.error('Erro ao estornar a cobrança:', error);
        throw error;
    }
  }

  async getIdentificationField(id: string): Promise<IAsaasPaymentBoletoResponse> {
    try {
      const response = await this.apiClient.get(`/payments/${id}/identificationField`);
      return response.data;
    } catch (error) {
        console.error('Erro ao obter a linha digiável do boleto da cobrança:', error);
        throw error;
    }
  }

  async getPixQrCode(id: string): Promise<IAsaasPaymentPixQrCodeResponse> {
    try {
      const response = await this.apiClient.get(`/payments/${id}/pixQrCode`);
      return response.data;
    } catch (error) {
        console.error('Erro ao obter o QR Code Pix da cobrança:', error);
        throw error;
    }
  }

  async receiveInCash(id: string, paymentData: IAsaasPaymentReceivedInCash): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(`/payments/${id}/receiveInCash`, paymentData);
      return response.data;
    } catch (error) {
        console.error('Erro ao confirmar recebimento em dinheiro da cobrança:', error);
        throw error;
    }
  }

  async undoReceivedInCash(id: string): Promise<IAsaasPaymentResponse> {
    try {
      const response = await this.apiClient.post(`/payments/${id}/undoReceivedInCash`);
      return response.data;
    } catch (error) {
        console.error('Erro ao desfazer a confirmação de recebimento em dinheiro da cobrança:', error);
        throw error;
    }
  }

  async limits(): Promise<IAsaasPaymentLimitResponse> {
    try {
      const response = await this.apiClient.get(`/payments/limits`);
      return response.data;
    } catch (error) {
        console.error('Erro ao obter os limites diários de cobrança:', error);
        throw error;
    }
  }
}