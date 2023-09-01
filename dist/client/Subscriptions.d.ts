import { AxiosInstance } from "axios";
import { IAsaasDeleteResponse, IListSubscriptionPaymentsResponse, ISubscription, ICreateSubscriptionParams, IUpdateSubscriptionParams, IListSubscriptionsResponse, IListSubscriptionsParams } from "../types/AsaasTypes";
export declare class SubscriptionsAPI {
    private apiClient;
    constructor(apiClient: AxiosInstance);
    create(params?: ICreateSubscriptionParams): Promise<ISubscription>;
    list(params?: IListSubscriptionsParams): Promise<IListSubscriptionsResponse>;
    getById(id: string): Promise<ISubscription>;
    getPayments(id: string): Promise<IListSubscriptionPaymentsResponse>;
    delete(id: string): Promise<IAsaasDeleteResponse>;
    updateById(id: string, params?: IUpdateSubscriptionParams): Promise<ISubscription>;
}
