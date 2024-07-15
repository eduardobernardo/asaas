import { AxiosInstance } from 'axios';
import {
  IListPixTransactionsParams,
  IListPixTransactionsResponse,
} from '../types/AsaasTypes';
export declare class PixTransactionsAPI {
  private apiClient;
  constructor(apiClient: AxiosInstance);
  list(
    params?: IListPixTransactionsParams,
  ): Promise<IListPixTransactionsResponse>;
}
