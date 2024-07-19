import {
  IAccountFeesResponse,
  IAccountNumberResponse,
  IAccountStatus,
  ICommercialInfoResponse,
  IDeleteAccountResponse,
  IListAccountWallets,
  IPaymentCheckoutConfigResponse,
  IUpdateCommercialInfo,
  IUpdatePaymentCheckoutConfig,
} from '@/types';
import { AxiosInstance } from 'axios';

export class MyAccountAPI {
  constructor(private apiClient: AxiosInstance) {}

  async commercialInfo(): Promise<ICommercialInfoResponse> {
    try {
      const response = await this.apiClient.get(`/myAccount/commercialInfo`);
      return response.data;
    } catch (error) {
      console.error('Erro ao recuperar dados comerciais:', error);
      throw error;
    }
  }

  async updateCommercialInfo(
    params?: IUpdateCommercialInfo,
  ): Promise<ICommercialInfoResponse> {
    try {
      const response = await this.apiClient.put(
        '/myAccount/commercialInfo',
        params,
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar dados comerciais:', error);
      throw error;
    }
  }

  async updatePaymentCheckoutConfig(
    params?: IUpdatePaymentCheckoutConfig,
  ): Promise<IPaymentCheckoutConfigResponse> {
    try {
      const response = await this.apiClient.post(
        `/myAccount/paymentCheckoutConfig`,
        params,
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao salvar personalização da fatura:', error);
      throw error;
    }
  }

  async paymentCheckoutConfig(): Promise<IPaymentCheckoutConfigResponse> {
    try {
      const response = await this.apiClient.get(
        `/myAccount/paymentCheckoutConfig`,
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao recuperar personalização da fatura:', error);
      throw error;
    }
  }

  async accountNumber(): Promise<IAccountNumberResponse> {
    try {
      const response = await this.apiClient.get(`/myAccount/accountNumber/`);
      return response.data;
    } catch (error) {
      console.error('Erro ao recuperar número de conta no Asaas:', error);
      throw error;
    }
  }

  async fees(): Promise<IAccountFeesResponse> {
    try {
      const response = await this.apiClient.get(`/myAccount/fees`);
      return response.data;
    } catch (error) {
      console.error('Erro ao recuperar taxas da conta:', error);
      throw error;
    }
  }

  async status(): Promise<IAccountStatus> {
    try {
      const response = await this.apiClient.get(`/myAccount/status`);
      return response.data;
    } catch (error) {
      console.error('Erro ao consultar situação cadastral da conta:', error);
      throw error;
    }
  }

  async walletIds(): Promise<IListAccountWallets> {
    try {
      const response = await this.apiClient.get(`/wallets`);
      return response.data;
    } catch (error) {
      console.error('Erro ao recuperar walletIds:', error);
      throw error;
    }
  }

  async delete(): Promise<IDeleteAccountResponse> {
    try {
      const response = await this.apiClient.delete(`/myAccount/`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir subconta White Label:', error);
      throw error;
    }
  }
}
