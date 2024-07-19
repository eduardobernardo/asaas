import { AxiosInstance } from 'axios';
import {
  IPixStaticQrCode,
  IPixStaticQrCodeResponse,
} from '../types/AsaasTypes';
export declare class PixQrCodesAPI {
  private apiClient;
  constructor(apiClient: AxiosInstance);
  newStatic(params?: IPixStaticQrCode): Promise<IPixStaticQrCodeResponse>;
}
