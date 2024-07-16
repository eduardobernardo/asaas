import axios from 'axios';
import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from './Customers';
import { InstallmentsAPI } from './Installments';
import { PaymentsAPI } from './Payments';
import { SubscriptionsAPI } from './Subscriptions';
import { Webhooks } from './Webhooks';
import { PixTransactionsAPI } from './PixTransactions';
import { PixQrCodesAPI } from './PixQrCodes';

export class AsaasClient {
  public customers: CustomersAPI;
  public payments: PaymentsAPI;
  public installments: InstallmentsAPI;
  public subscriptions: SubscriptionsAPI;
  public webhooks: Webhooks;
  public pixTransactions: PixTransactionsAPI;
  public pixQrCodes: PixQrCodesAPI;

  constructor(private apiKey: string, options: AsaasOptions = {}) {
    const apiClient = axios.create({
      baseURL: this.getUrl(options),
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
    this.pixTransactions = new PixTransactionsAPI(apiClient);
    this.pixQrCodes = new PixQrCodesAPI(apiClient);
  }

  getUrl(options: AsaasOptions = {}) {
    if (options.sandbox) {
      return options.sandboxUrl || 'https://sandbox.asaas.com/api/v3';
    }
    return options.baseUrl || 'https://api.asaas.com/v3';
  }
}
