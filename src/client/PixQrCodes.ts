import { AxiosInstance } from 'axios';
import {
  APIOptions,
  IPixStaticQrCode,
  IPixStaticQrCodeResponse,
} from '../types/AsaasTypes';
import { BaseAPI } from './BaseAPI';

export class PixQrCodesAPI extends BaseAPI {
  constructor(apiClient: AxiosInstance, options: APIOptions = {}) {
    super(apiClient, options);
  }

  async newStatic(
    params?: IPixStaticQrCode,
  ): Promise<IPixStaticQrCodeResponse> {
    try {
      const response = await this.apiClient.post('/pix/qrCodes/static', {
        params,
      });
      return response.data;
    } catch (error) {
      return this.handleError(error, 'Erro ao criar QR Code estático:');
    }
  }
}
