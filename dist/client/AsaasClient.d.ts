import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from "../client/Customers";
export declare class AsaasClient {
    private apiKey;
    customers: CustomersAPI;
    constructor(apiKey: string, options?: AsaasOptions);
}
