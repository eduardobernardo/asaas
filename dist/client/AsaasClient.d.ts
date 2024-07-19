import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from './Customers';
import { InstallmentsAPI } from './Installments';
import { PaymentsAPI } from './Payments';
import { SubscriptionsAPI } from './Subscriptions';
import { Webhooks } from './Webhooks';
import { PixTransactionsAPI } from './PixTransactions';
import { PixQrCodesAPI } from './PixQrCodes';
export declare class AsaasClient {
  private apiKey;
  customers: CustomersAPI;
  payments: PaymentsAPI;
  installments: InstallmentsAPI;
  subscriptions: SubscriptionsAPI;
  webhooks: Webhooks;
  pixTransactions: PixTransactionsAPI;
  pixQrCodes: PixQrCodesAPI;
  constructor(apiKey: string, options?: AsaasOptions);
  getUrl(options?: AsaasOptions): string;
}
