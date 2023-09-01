import axios from 'axios';
import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from "./Customers"
import { PaymentsAPI } from './Payments';
import { InstallmentsAPI } from './Installments';
import { SubscriptionsAPI } from './Subscriptions';

export class AsaasClient {
  public customers: CustomersAPI;
  public payments: PaymentsAPI;
  public installments: InstallmentsAPI;
  public subscriptions: SubscriptionsAPI;
  
  constructor(private apiKey: string, options: AsaasOptions = {}) {
    const apiClient = axios;
    apiClient.defaults.baseURL = options.sandbox ? (options.sandboxUrl || 'https://sandbox.asaas.com/api/v3') : options.baseUrl ? options.baseUrl : 'https://api.asaas.com/v3';
    apiClient.defaults.headers.common['access_token'] = this.apiKey;

    this.customers = new CustomersAPI(apiClient);
    this.payments = new PaymentsAPI(apiClient);
    this.installments = new InstallmentsAPI(apiClient);
    this.subscriptions = new SubscriptionsAPI(apiClient);
  }
}

