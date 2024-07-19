import { AxiosInstance } from 'axios';
import {
  IPixStaticQrCode,
  IPixStaticQrCodeResponse,
} from '../types/AsaasTypes';

export class PixQrCodesAPI {
  constructor(private apiClient: AxiosInstance) {}

  async newStatic(
    params?: IPixStaticQrCode,
  ): Promise<IPixStaticQrCodeResponse> {
    try {
      const response = await this.apiClient.post('/pix/qrCodes/static', {
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao criar QR Code estático:', error);
      throw error;
    }
  }
}
