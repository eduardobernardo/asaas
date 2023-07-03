import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from "../client/Customers";
import { PaymentsAPI } from './Payments';
import { InstallmentsAPI } from './Installments';
export declare class AsaasClient {
    private apiKey;
    customers: CustomersAPI;
    payments: PaymentsAPI;
    installments: InstallmentsAPI;
    constructor(apiKey: string, options?: AsaasOptions);
}
