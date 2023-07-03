import { AxiosInstance } from "axios";
import { IAsaasCustomer, IAsaasCustomerResponse, IAsaasDeleteResponse, IListAsaasCustomerResponse, IListCustomersParams } from "../types/AsaasTypes";
export declare class CustomersAPI {
    private apiClient;
    constructor(apiClient: AxiosInstance);
    new(customerData: IAsaasCustomer): Promise<IAsaasCustomerResponse>;
    list(params?: IListCustomersParams): Promise<IListAsaasCustomerResponse>;
    getById(id: string): Promise<IAsaasCustomerResponse>;
    delete(id: string): Promise<IAsaasDeleteResponse>;
    restore(id: string): Promise<IAsaasCustomerResponse>;
    updateById(id: string, customerData: IAsaasCustomer): Promise<IAsaasCustomerResponse>;
}
