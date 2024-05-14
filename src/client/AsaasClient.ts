import axios from 'axios';
import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from './Customers';
import { InstallmentsAPI } from './Installments';
import { PaymentsAPI } from './Payments';
import { SubscriptionsAPI } from './Subscriptions';
import { Webhooks } from './Webhooks';

export class AsaasClient {
  public customers: CustomersAPI;
  public payments: PaymentsAPI;
  public installments: InstallmentsAPI;
  public subscriptions: SubscriptionsAPI;
  public webhooks: Webhooks;

  constructor(private apiKey: string, options: AsaasOptions = {}) {
    const apiClient = axios.create({
      baseURL: options.sandbox
        ? options.sandboxUrl || 'https://sandbox.asaas.com/api/v3'
        : options.baseUrl
        ? options.baseUrl
        : 'https://api.asaas.com/v3',
      headers: {
        common: {
          access_token: this.apiKey,
        },
      },
    });

    this.customers = new CustomersAPI(apiClient);
    this.payments = new PaymentsAPI(apiClient);
    this.installments = new InstallmentsAPI(apiClient);
    this.subscriptions = new SubscriptionsAPI(apiClient);
    this.webhooks = new Webhooks();
  }
}
