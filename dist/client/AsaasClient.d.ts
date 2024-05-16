import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from './Customers';
import { InstallmentsAPI } from './Installments';
import { PaymentsAPI } from './Payments';
import { SubscriptionsAPI } from './Subscriptions';
import { Webhooks } from './Webhooks';
export declare class AsaasClient {
  private apiKey;
  customers: CustomersAPI;
  payments: PaymentsAPI;
  installments: InstallmentsAPI;
  subscriptions: SubscriptionsAPI;
  webhooks: Webhooks;
  constructor(apiKey: string, options?: AsaasOptions);
}
