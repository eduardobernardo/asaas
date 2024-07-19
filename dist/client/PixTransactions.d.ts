import { AxiosInstance } from 'axios';
import {
  IListPixTransactionsParams,
  IListPixTransactionsResponse,
  IPixTransaction,
} from '../types/AsaasTypes';
export declare class PixTransactionsAPI {
  private apiClient;
  constructor(apiClient: AxiosInstance);
  list(
    params?: IListPixTransactionsParams,
  ): Promise<IListPixTransactionsResponse>;
  getById(id: string): Promise<IPixTransaction>;
  cancel(id: string): Promise<IPixTransaction>;
}
