import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from "./Customers";
import { PaymentsAPI } from './Payments';
import { InstallmentsAPI } from './Installments';
import { SubscriptionsAPI } from './Subscriptions';
export declare class AsaasClient {
    private apiKey;
    customers: CustomersAPI;
    payments: PaymentsAPI;
    installments: InstallmentsAPI;
    subscriptions: SubscriptionsAPI;
    constructor(apiKey: string, options?: AsaasOptions);
}
